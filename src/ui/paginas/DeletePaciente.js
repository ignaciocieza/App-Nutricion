import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import Notification from '../widgets/Notification';
import  {deletePaciente} from '../../api/actions/index';

class DeletePaciente extends React.Component {
    /**
     * Funcion que puede pasarse como "props",
     * en el componente "Notification" para agregar botones ("aceptar/cancelar").
     */
    renderActions() {
        let { id } = this.props.match.params;

        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deletePaciente(id)}
                    className='ui button negative'
                >
                    Aceptar
                </button>
                <Link to='/menu' className='ui button'>Cancelar</Link>
            </React.Fragment>
        );
    } 
    /**
     * "Notification", por defecto el usuario tiene 3 segundos para 
     * aceptar borrar vidus. En caso de que pasen los 3 segundo o 
     * aprete cancelar sera redirigido a la pantalla principal
     */
    render() {
        return (
            <Notification
                title="Borrar Paciente?"
                actions={this.renderActions()}
                //onDismiss={() => history.push('/menu')}
                //time={5000}
                //time={null}
            />
        );
    };
}

const mapDispatchToProps = dispatch => ({
    deletePaciente: bindActionCreators(deletePaciente, dispatch)
});

export default connect(null, mapDispatchToProps)(DeletePaciente);