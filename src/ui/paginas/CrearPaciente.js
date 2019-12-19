import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {
    createPaciente,
    inicializarPaciente,
    changeStateTable
} from '../../api/actions/index';
import FormBasico from '../widgets/forms/FormBasico';
import CoustomButton from '../widgets/CoustomButton';
import { HANDLE_GET } from '../../constants';

const ipcRenderer = window.require('electron').ipcRenderer;

class CrearPaciente extends React.Component {
    /**
     * se debe traer el manejador del get,
     * porque en el action no logré sacar 'data'
     */
    componentDidMount() {
        this.props.inicializarPaciente();
        ipcRenderer.on(HANDLE_GET, this.handleFetch);
    }

    componentWillUnmount() {
        ipcRenderer.removeListener(HANDLE_GET, this.handleFetch);
    }

    /**
     * funcion que extrae los datos
     * de la peticion: ipcRenderer.on(HANDLE_GET, this.handleFetch) 
     */
    handleFetch = (e, data) => {
        let { text } = data;
        let { auxFormValues } = this.props;
        let auxId;

        if (auxFormValues) {
            auxId = null;
            text.forEach(element => {
                if (element.dni === auxFormValues.dni && element.apellido === auxFormValues.apellido) {
                    auxId = element.id;
                }
            })
            if (auxId) {
                this.props.createPaciente(null, auxId);
            }
        }
    }

    onSubmit = (formValues) => {
        this.props.createPaciente(formValues);
    }

    render() {
        return (
            <React.Fragment>
                <div className="ui segment">
                    <h1 className="ui center aligned icon header">Historia Personal</h1>
                </div>
                <div className="ui horizontal divider header">
                    <CoustomButton primerNombre='Imprimir' segundoNombre='Salir' />
                </div>
                <div className="ui clearing segment">
                    <FormBasico onSubmit={this.onSubmit} />
                </div>
                <div className="ui clearing segment">
                    <CoustomButton primerNombre='Imprimir' segundoNombre='Salir' />
                    {this.props.pacienteId ?
                        <Link
                            to={'/tabla'}
                            className='ui button primary'
                            onClick={() =>
                                this.props.changeStateTable(true)
                            }
                        >
                            Tabla
                    </Link> : ""}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (store) => ({
    pacienteId: store.pacientes.currentPaciente,
    auxFormValues: store.pacientes.formValues
});


const mapDispatchProps = dispatch => ({
    createPaciente: bindActionCreators(createPaciente, dispatch),
    inicializarPaciente: bindActionCreators(inicializarPaciente, dispatch),
    changeStateTable: bindActionCreators(changeStateTable, dispatch)
})

export default connect(mapStateToProps, mapDispatchProps)(CrearPaciente)