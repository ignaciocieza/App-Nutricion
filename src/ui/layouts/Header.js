import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    searchValue,
    resetCurrentPaciente,
    changeHiddeToFalse,
    resetCurrentTable
} from '../../api/actions/index';

/**
 * Header, funcion que se invoca para formar el header de la aplicacion.
 * Link, reemplaza a la etiqueta "a" y conecta con el path definido en "router". 
 */
const Header = ({ history, searchValue, resetCurrentPaciente, changeHiddeToFalse, resetCurrentTable }) => {
    return (
        <div className="ui pointing menu">
            <NavLink
                to='/menu'
                onClick={() => {
                    resetCurrentPaciente();
                    resetCurrentTable();
                    changeHiddeToFalse();
                }}
                className="item"
            >
                Menu Principal
            </NavLink>
            <NavLink
                to='/paciente/new'
                onClick={() => {
                    resetCurrentPaciente();
                    resetCurrentTable();
                    changeHiddeToFalse();
                }}
                className="item"
            >
                Nuevo Paciente
            </NavLink>
            {/* <div className="item">
                Dietas
            </div>
            <div className="item">
                Turnos
            </div> */}
            <div className="right menu">
                <div className="item">
                    <div className="ui transparent icon input">
                        <input
                            type="text"
                            placeholder="Buscar Paciente..."
                            onChange={(e) => {
                                searchValue(e.target.value.substr(0, 20))
                                history.push('/search')
                            }}
                        />
                        <i className="search link icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    searchValue: bindActionCreators(searchValue, dispatch),
    resetCurrentPaciente: bindActionCreators(resetCurrentPaciente, dispatch),
    changeHiddeToFalse: bindActionCreators(changeHiddeToFalse, dispatch),
    resetCurrentTable: bindActionCreators(resetCurrentTable, dispatch),
});

export default withRouter(connect(null, mapDispatchToProps)(Header));


