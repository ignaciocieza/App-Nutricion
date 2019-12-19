const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const db = require('electron-db');
const ipcMain = electron.ipcMain;
//Print
const fs = require('fs');
const os = require('os');
const shell = electron.shell;
//-------
const {
    GET,
    PUT,
    HANDLE_GET,
    DELETE,
    CREATE_DB,
    PATCH,
    PRINT
} = require('./constants');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        //permite integrar Electron con React
        webPreferences: { nodeIntegration: true },
        icon: path.join(__dirname, '/imagen/favicon-tres.ico')
    });

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    mainWindow.loadURL(startUrl);

    //oculta el menuBar.
    mainWindow.setMenu(null);

    // and load the index.html of the app.
    //mainWindow.loadURL('http://localhost:3000');

    //Open the DevTools.
    //mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

/**
 * Funcion que crea la base de datos
 */
ipcMain.on(CREATE_DB, (e, dbName) => {
    db.createTable(dbName, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
    })
})

/**
 * funcion que conecta las constantes, de utils, con IPC
 * para guardar en tabla de datos: equivale al "PUT"
 * Crea tabla, si no existe y sino, inserta el objeto.
 */
ipcMain.on(PUT, (e, dbName, obj) => {

    db.insertTableContent(dbName, obj, (succ, msg) => {
        console.log("Success: " + succ);
        console.log("Message: " + msg);
    });
})

/**
 * funcion que conecta las constantes, de utils, con IPC
 * para obtener el texto,
 * Funcion: "GET",
 * proviene de App -> loadsaveText()
 */
ipcMain.on(GET, (e, dbName) => {
    db.getAll(dbName, (succ, data) => {
        if (succ) {
            mainWindow.send(HANDLE_GET, {
                success: succ,
                message: 'DB GET',
                text: data
            })
        }
        else {
            console.log("Evento Fetch: " + e);
        }
    })
})

/**
 * Funcion "DELETE"
 */
ipcMain.on(DELETE, (e, dbName, id) => {
    db.deleteRow(dbName, { "id": id }, (succ, msg) => {
        console.log(msg);
    });
})

/**
 * Funcion PATCH,
 * edita valores de la base de datos
 */
ipcMain.on(PATCH, (e, dbName, id, set) => {
    let where = { "id": id };
    db.updateRow(dbName, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
    });
})
/**
 * Funcion Print,
 * imprime windows actual
 */
ipcMain.on(PRINT, (event) => {
    const pdfPath = path.join(os.tmpdir(), "print.pdf");
    const win = BrowserWindow.fromWebContents(event.sender);

    win.webContents.printToPDF({}, (error, data) => {
        if (error) {
            return (console.log("El error:", error.message));
        }

        fs.writeFile(pdfPath, data, (error) => {
            if (error) {
                return (console.log(error.message));
            }
            shell.openExternal("file://" + pdfPath);
        })
    })

});
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.