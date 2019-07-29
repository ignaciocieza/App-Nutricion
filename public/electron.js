const electron = require('electron');
//const {ipcMain}= require('electron');
const db = require('electron-db');
const path = require('path');
//const url = require('url');
const isDev = require('electron-is-dev'); 
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const location = path.join(__dirname, '');


let mainWindow;


/*const name='basePrueba';
let aux = new Object();
let auxDos=new Object();
aux.name = "Alexius Academia";
aux.address = "Paco, Botolan, Zambales";
auxDos.nombre="Ingacio";
auxDos.apellido="Cieza";*/

//-------------------Base de Datos----------------------------
/**
 * Crea una base datos.
 * Primer arg, nombre de la tabla.
 * Segundo arg, la ubicacion (location, como está arriba si es en el directorio actual),
 * Tercer arg, mensaje de exito o error.
 */
function createTable(dataBaseName){
  db.createTable(dataBaseName, location, (succ, msg) => {
    // succ - sboolean, tells if the call is successful
    if (succ) {
      console.log(msg)
    } else {
      console.log('errroooooorrrrr ' + msg)
    }
  })
} 
/**
 * No se puede exportar fuera de la carpeta src.
 * por lo tanto: export function insertTableContent -> no se puede poner.
 * Electron, parece correr dentro de la carpeta public.
 */
function insertTableContent(dataBaseName, obj){
  if (db.valid(dataBaseName,location)){
    db.insertTableContent(dataBaseName, location, obj, (succ, msg) => {
      // succ - boolean, tells if the call is successful
      console.log("Success: " + succ);
      console.log("Message: " + msg);
    });
  }
}
//createTable(name);
//insertTableContent(name,auxDos);
//-----------------------------Ipc Main--------------------------------------------
/*ipcMain.on('paciente:nuevo',(e, obj)=>{
  createTable(name);
  insertTableContent(name,obj);
})*/
//----------------------------------------------------------------------------------
/***
 * webpreferences, sirve para desarrollo ya que elimina la seguridad del explorador. 
 *                debe ser eliminado (!) en la etapa de produccion. 
 */
function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680, webpreferences: { webSecurity: false } });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

