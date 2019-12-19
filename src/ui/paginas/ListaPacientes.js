import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';
import {
    fetchPacientes,
    deletePaciente,
    setCurrentPaciente,
    createTable,
    changeStateTable
} from '../../api/actions/index';
import { Link } from "react-router-dom";
import { HANDLE_GET } from '../../constants';
const ipcRenderer = window.require('electron').ipcRenderer;

class ListaPacientes extends Component {

    componentDidMount() {
        this.props.fetchPacientes();
        ipcRenderer.on(HANDLE_GET, this.handleFetch);
    }

    componentWillUnmount() {
        ipcRenderer.removeListener(HANDLE_GET, this.handleFetch);
    }

    handleFetch = (e, data) => {
        
        if (!this.props.pacientes) {
            this.props.fetchPacientes(data.text);
        }
    }

    /**
   * Funcion que filtar aquellos objetos que no tengan igual id de usuario y
   * en caso de tenerlos agrega el boton de "editar" y el boton de "borrar"
   * @param {*objeto obtenido de mapear los objetos dentro 
      * del estado de "vidusReducer"} vidUs 
      */
    renderAdmin(paciente) {
        if (paciente) {
            return (
                <div className='right floated content'>
                    <button
                        className='ui button negative'
                        onClick={() => {
                            this.props.setCurrentPaciente(paciente);
                            this.props.changeStateTable(true);
                            this.props.history.push('/tabla');
                        }}
                        style={{ backgroundColor: '#1EA896', color: '#272727' }}
                    >
                        Tabla
                    </button>
                    <Link
                        to={`/paciente/edit/${paciente.id}`}
                        className='ui button primary'
                        onClick={() => {
                            this.props.setCurrentPaciente(paciente);
                            this.props.changeStateTable(true);
                        }}
                        style={{ backgroundColor: '#ABA9BF', color: '#272727' }}
                    >
                        Historia
                    </Link>
                    <Link
                        to={`/paciente/delete/${paciente.id}`}
                        className='ui button negative'
                        style={{ backgroundColor: '#FF595E', color: '#272727' }}
                    >
                        Borrar
                    </Link>

                </div>
            );
        }
    }

    /**
     * Funcion que muestra los objetos obtenidos del formulario
     * @param {objet obtenido de la funcion "renderList()"} paciente
     */
    list(paciente) {
        return (
            <div className='item' key={paciente.id}>
                {this.renderAdmin(paciente)}
                <i className='large middle aligned icon user circle outline' />
                <div className='content'>
                    <div className='header'>
                        {paciente.nombre.toUpperCase()} {paciente.apellido.toUpperCase()}
                    </div>
                    <div className='description'>
                        {paciente.dni}
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Funcion que muestra una lista de pacientes,
     * obtenidos de la base de datos.
     */
    renderList() {
        let { pacientes, searchValue, history } = this.props;
        let propsToRender = pacientes;

        if (history.location.pathname === '/search') {
            propsToRender = searchValue;
        }

        return (propsToRender ? propsToRender.map(paciente => this.list(paciente)) : '');
        
    }

    render() {
        return (
            <div className='ui celled list'>
                {this.renderList()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPacientes: bindActionCreators(fetchPacientes, dispatch),
    deletePaciente: bindActionCreators(deletePaciente, dispatch),
    setCurrentPaciente: bindActionCreators(setCurrentPaciente, dispatch),
    createTable: bindActionCreators(createTable, dispatch),
    changeStateTable: bindActionCreators(changeStateTable, dispatch)
});

const mapStateToProps = (estado) => ({
    pacientes: estado.pacientes.todosLosPacientes,
    searchValue: estado.pacientes.searchValue
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListaPacientes))

