import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createTable, changeStateTable, resetCurrentTable } from '../../api/actions/index';
import FormTabla from '../widgets/forms/FormTabla';
import Tabla from '../widgets/Tabla';
import ChartPeso from '../widgets/ChartPeso';
import ChartGrasMusc from '../widgets/ChartGrasMusc';
import CoustomButton from '../widgets/CoustomButton';
import { HANDLE_GET } from '../../constants';

const ipcRenderer = window.require('electron').ipcRenderer;

class CrearTabla extends React.Component {

    componentDidMount() {
        this.props.createTable();
        ipcRenderer.on(HANDLE_GET, this.handleFetch);
    }

    componentWillUnmount() {
        ipcRenderer.removeListener(HANDLE_GET, this.handleFetch);
    }

    handleFetch = (e, data) => {
        let { text } = data;
        let { pacienteId, stateTable} = this.props;

        if (stateTable) {
            this.props.createTable(null, pacienteId, text);
            this.props.changeStateTable(false);
        }
    }

    onSubmit = (formValues) => {
        let { pacienteId, createTable,changeStateTable, resetCurrentTable } = this.props;
        createTable(formValues, pacienteId, null);
        changeStateTable(true);
        resetCurrentTable();
    }

    render() {
        return (
            <React.Fragment>
                <div className="ui segment">
                    {this.props.namePaciente ? <h1 className="ui center aligned icon header">
                        {this.props.namePaciente.toUpperCase()} {this.props.lastNamePaciente.toUpperCase()}
                    </h1> : ""}
                    <h1 className="ui center aligned icon sub header">Tabla y Gráfico</h1>
                </div>
                <div className="ui clearing segment">
                    <FormTabla onSubmit={this.onSubmit} />
                    <h4 className="ui horizontal divider header">Tabla</h4>
                    <Tabla />
                    <h4 className="ui horizontal divider header">Gráficos</h4>
                    <ChartPeso />
                    <br></br>
                    <ChartGrasMusc />
                    <h4 className="ui horizontal divider header">Imprimir-Salir</h4>
                    <CoustomButton primerNombre='Imprimir' segundoNombre='Salir' />
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (store) => ({
    pacienteId: store.pacientes.currentPaciente,
    namePaciente: store.pacientes.namePaciente,
    lastNamePaciente: store.pacientes.lastNamePaciente,
    stateTable: store.pacientes.stateTable
});

const mapDispatchProps = dispatch => ({
    createTable: bindActionCreators(createTable, dispatch),
    changeStateTable: bindActionCreators(changeStateTable, dispatch),
    resetCurrentTable:bindActionCreators (resetCurrentTable,dispatch),
});


export default connect(mapStateToProps, mapDispatchProps)(CrearTabla);