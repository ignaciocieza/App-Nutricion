import React from 'react';
import { Link } from "react-router-dom";

/**
 * Header, funcion que se invoca para formar el header de la aplicacion.
 * Link, reemplaza a la etiqueta "a" y conecta con el path definido en "router". 
 */
const Header = () => {
    return (
        <div className="ui pointing menu">
            <Link to='/' className= "item" >  <a></a>
                Menu Principal
            </Link>
            <Link to='/NuevoPaciente' className= "item">
                Nuevo Paciente
            </Link>
            <Link to='/EnDesarrollo'  className="item">
                Dietas
            </Link>
            <Link to='/EnDesarrollo'  className="item">
                Turnos
            </Link>
            <Link to='/AddAbaseDatos'  className="item">
                Base Datos
            </Link>
            <div className="right menu">
                <div className="item">
                    <div className="ui transparent icon input">
                        <input type="text" placeholder="Buscar en Menu Principal..." />
                        <i className="search link icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header; 


