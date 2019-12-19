import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import FormBasico from '../widgets/forms/FormBasico';
import CoustomButton from '../widgets/CoustomButton';
import {
    pacienteSeleccionado,
    editPaciente,
    resetCurrentPaciente,
    setCurrentPaciente
} from '../../api/actions/index';

class EditarPaciente extends Component {

    componentDidMount() {
        //el motivo de esta funcion, que parece redundante, 
        //es para ser un "flag" para mostar el btn "tabla", 
        //cuando se presione el btn "guardar"
        this.props.pacienteSeleccionado(this.props.match.params.id);
        //reseteo el paciente, para que tenga que guardar cambios
        //antes de ir a la pagina de tabla.
        this.props.resetCurrentPaciente();
    }

    /**
     * Guarda el paciente, que proviene del formulario.
     */
    onSubmit = (formaValues) => {
        this.props.editPaciente(this.props.match.params.id, formaValues)
    }

    render() {
        if (this.props.pacienteSeleccionado) {
            return (
                <React.Fragment>
                    <div className="ui clearing segment">
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
                            >
                                Tabla
                            </Link> :
                            ""}
                    </div>
                </React.Fragment>
            )
        }
        else {
            return "";
        }

    }
}
const mapStateToProps = (store) => ({
    pacienteSeleccionado: store.pacientes.pacienteSeleccionado,
    pacienteId: store.pacientes.currentPaciente
});

const mapDispatchToProps = dispatch => ({
    pacienteSeleccionado: bindActionCreators(pacienteSeleccionado, dispatch),
    editPaciente: bindActionCreators(editPaciente, dispatch),
    resetCurrentPaciente: bindActionCreators(resetCurrentPaciente, dispatch),
    setCurrentPaciente: bindActionCreators(setCurrentPaciente, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditarPaciente);