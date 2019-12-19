import history from '../history';
import {
    PUT,
    GET,
    DELETE,
    CREATE_DB,
    PATCH
} from '../../constants';
import {
    CREATE_PACIENTE,
    CREATE_TABLE,
    SELECTED_PACIENT,
    INICIALIZAR_PACIENTE,
    FETCH_PACIENTES,
    DELETE_PACIENTE,
    EDIT_PACIENTE,
    SEARCH_VALUE,
    RESET_CURRENT_PACIENTE,
    SET_CURRENT_PACIENTE,
    DELETE_TABLA,
    CHANGE_STATE_TABLE,
    CHANGE_HIDDE_COMPONENT,
    EDIT_TABLA,
    RESET_CURRENT_TABLE
} from './type';
const ipcRenderer = window.require('electron').ipcRenderer;

export const crearBaseDatos = () => {
    ipcRenderer.send(CREATE_DB, 'pacientes');
    ipcRenderer.send(CREATE_DB, 'tablas');

    return ({
        type: "ok"
    })
}

export const createPaciente = (formValues, data) => {
    let response = data;
    if (formValues) {
        //Guardar en base de datos
        ipcRenderer.send(PUT, 'pacientes', formValues);
        //solicitar a la base de datos traer todos los pacientes    
        ipcRenderer.send(GET, 'pacientes');
        response = formValues;
    }

    return ({
        type: CREATE_PACIENTE,
        payload: response
    });
}

export const deletePaciente = (id) => {
    //peticion sync para borrar id, de la base de datos
    ipcRenderer.send(DELETE, 'pacientes', parseInt(id));
    history.push('/menu');

    return ({
        type: DELETE_PACIENTE,
        payload: id
    });
}

/**
 * Solo recibe un id y 
 * lo en el reducer 
 * busca que este en la lista de pacientes.
 * Se usa como flag, para mostar el btn "tabla",
 * cuando se presiona el btn "Guardar"
 * @param {id} id 
 */
export const pacienteSeleccionado = (id) => ({
    type: SELECTED_PACIENT,
    payload: id
})

/**
 * buscar todos los pacientes en la base de datos
 */
export const fetchPacientes = (data) => {
    let response = data ? data : null;

    ipcRenderer.send(GET, 'pacientes');

    return ({
        type: FETCH_PACIENTES,
        payload: response
    });
}

/**
 * Funcion que edita los valores de la base de datos, en base al id
 * y luego redirige a la pagina principal.
 * @param {*viuds a editar} id 
 * @param {*valores del formulario a agregar a la base de datos} formValues 
 */
export const editPaciente = (id, formValues) => {
    //let response;
    //envio a "main.js" datos a modificar
    ipcRenderer.send(PATCH, 'pacientes', parseInt(id), formValues);

    return ({
        type: EDIT_PACIENTE,
        payload: id
    });
}

/**
 * funcion que se usa para dar valor inicial al form
 * asi este puede inicializar desde el state
 */
export const inicializarPaciente = () => ({
    type: INICIALIZAR_PACIENTE,
    payload: {}
});

export const searchValue = (searchValue) => {
    return ({
        type: SEARCH_VALUE,
        payload: searchValue
    })
}

/**
 * vuelve a cero al paciente actual
 */
export const resetCurrentPaciente = () => ({ type: RESET_CURRENT_PACIENTE });

export const resetCurrentTable = () => ({ type: RESET_CURRENT_TABLE });

/**
 * Funcion que setea 'currentePaciente' 
 * con el id del evento en cuestion,
 * el nombre y el apellido
 * @param {id del paciente} id 
 */
export const setCurrentPaciente = (paciente) => {
    return ({
        type: SET_CURRENT_PACIENTE,
        payload: paciente
    });
}

export const createTable = (formValues, pacienteId, data) => {
    let response = data;
    let auxPeso = 0;
    let auxDescensoTotal = 0;
    let auxDescenso = 0;
    let pesoInicial = false;
    let arrayAretornar = [];
    let auxPorcMusculo = 0;
    let auxPorcGrasa = 0;
    let auxContadorMusc = 0;
    let auxContadorGrasa = 0;
    let auxPorcMusculoAnterior = 0;
    let auxPorcGrasaAnterior = 0;
    let auxObj = { ...formValues, pacienteId };
    
    //si hay valores actualiza la base de datos
    if(formValues){
        if(formValues.id){
            ipcRenderer.send(PATCH, 'tablas', formValues.id, formValues);
        }
        else{
            ipcRenderer.send(PUT, 'tablas', auxObj); 
        }
    }
    ipcRenderer.send(GET, 'tablas');

    if (response) {
        arrayAretornar = response.filter(tabla => {
            if (parseInt(tabla.pacienteId) === parseInt(pacienteId)) {
                auxPorcMusculo = ((tabla.musculo * tabla.peso) / 100);
                auxPorcGrasa = ((tabla.grasa * tabla.peso) / 100);
                tabla.charMusculo = auxPorcMusculo.toFixed(3);//calculo solo para el grafico
                tabla.charGrasa = auxPorcGrasa.toFixed(3);//calculo solo para el grafico

                if (tabla.esFechaInicial) {
                    tabla.descenso = 0;
                    tabla.descensoTotal = 0;
                    tabla.esFechaInicial = 'Si';
                    pesoInicial = true;
                    auxPeso = parseFloat(tabla.peso);
                    auxDescensoTotal = 0;
                    tabla.totalMusculo = 0;//calculo solo para el grafico
                    tabla.totalGrasa = 0;//calculo solo para el grafico
                    auxPorcMusculoAnterior = auxPorcMusculo;
                    auxPorcGrasaAnterior = auxPorcGrasa;
                }
                else if (pesoInicial) {
                    auxDescenso = parseFloat(tabla.peso) - auxPeso;
                    auxDescensoTotal += auxDescenso;
                    auxContadorMusc += (auxPorcMusculo - auxPorcMusculoAnterior);
                    auxContadorGrasa += (auxPorcGrasa - auxPorcGrasaAnterior);
                    auxPorcMusculoAnterior = auxPorcMusculo;
                    auxPorcGrasaAnterior = auxPorcGrasa;
                    //if (auxDescensoTotal >= 0 && auxDescenso > 0) 
                    if (auxDescensoTotal >= 0 && auxDescenso > 0) {
                        auxDescensoTotal = 0;
                    }
                    // else {
                    //     auxDescensoTotal += auxDescenso;
                    // }
                    tabla.esFechaInicial = 'No';
                    tabla.descenso = auxDescenso.toFixed(3);
                    tabla.descensoTotal = auxDescensoTotal.toFixed(3);
                    tabla.totalMusculo = auxContadorMusc.toFixed(3);
                    tabla.totalGrasa = auxContadorGrasa.toFixed(3);
                    auxPeso = parseFloat(tabla.peso);
                }
                return tabla
            }
            return "";
        })
    }
    return ({
        type: CREATE_TABLE,
        payload: arrayAretornar
    });
}

export const deleteTable = (id) => {
    //peticion sync para borrar id, de la base de datos
    ipcRenderer.send(DELETE, 'tablas', id);
    return ({
        type: DELETE_TABLA,
        payload: id
    });
}

export const cargarFormDeTabla = (id) => {
    return ({
        type: EDIT_TABLA,
        payload: id
    });
}

/**
 * Cambia el estado de la tabla,
 * porque es un "flag" para que en el 
 * Handle con la base de electron no se ejecute constantemente
 */
export const changeStateTable = (state) => ({ type: CHANGE_STATE_TABLE, payload: state });

export const changeHiddeToFalse = () => ({ type: CHANGE_HIDDE_COMPONENT });


