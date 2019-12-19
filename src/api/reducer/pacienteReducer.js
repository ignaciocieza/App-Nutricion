import _ from 'lodash';
import {
    seleccionarPaciente,
    filterSearchProducts,
    filtrarPacienteTablas,
    findPacienteTablas
} from './helperFunctions';
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
} from '../actions/type';

let estadoInicial = {
    pacienteSeleccionado: {},
    todosLosPacientes: [],
    currentPaciente: 0,
    namePaciente: "",
    lastNamePaciente: "",
    searchValue: [],
    pacienteTablas: [],
    valoresDelEditTabla: {},
    formValues: {},
    stateTable: false,
    hidde: true
}

const pacienteReducer = (estado = estadoInicial, action) => {
    switch (action.type) {
        case CREATE_PACIENTE:
            return {
                ...estado,
                currentPaciente: action.payload,
                formValues: action.payload
            }
        case EDIT_PACIENTE:
            return {
                ...estado,
                currentPaciente: action.payload
            }
        case FETCH_PACIENTES:
            return {
                ...estado,
                todosLosPacientes: action.payload
            }
        case SELECTED_PACIENT:
            return {
                ...estado,
                pacienteSeleccionado: seleccionarPaciente(estado.todosLosPacientes, action.payload)
            }
        case DELETE_PACIENTE:
            return _.omit(estado, action.payload);
        case INICIALIZAR_PACIENTE:
            return { ...estado, pacienteSeleccionado: action.payload }
        case SEARCH_VALUE:
            return {
                ...estado,
                searchValue: filterSearchProducts(estado.todosLosPacientes, action.payload)
            }
        case RESET_CURRENT_PACIENTE:
            return {
                ...estado,
                currentPaciente: 0,
            }
        case RESET_CURRENT_TABLE:
            return {
                ...estado,
                valoresDelEditTabla: {}
            }
        case SET_CURRENT_PACIENTE:
            return {
                ...estado,
                currentPaciente: action.payload.id,
                namePaciente: action.payload.nombre,
                lastNamePaciente: action.payload.apellido
            }
        case CREATE_TABLE:
            return {
                ...estado,
                pacienteTablas: action.payload
            }
        case DELETE_TABLA:
            return {
                ...estado,
                pacienteTablas: filtrarPacienteTablas(estado.pacienteTablas, action.payload)
            }
        case EDIT_TABLA:
            return {
                ...estado,
                valoresDelEditTabla: findPacienteTablas(estado.pacienteTablas, action.payload)
            }
        case CHANGE_STATE_TABLE:
            return {
                ...estado,
                stateTable: action.payload
            }
        case CHANGE_HIDDE_COMPONENT:
            return {
                ...estado,
                hidde: false
            }
        default:
            return estado
    }
}

export default pacienteReducer;