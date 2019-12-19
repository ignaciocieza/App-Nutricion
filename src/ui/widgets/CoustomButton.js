import React from 'react';
import { Link } from "react-router-dom";
import { PRINT } from '../../constants';
const ipcRenderer = window.require('electron').ipcRenderer;

const CoustomButton = ({ primerNombre, segundoNombre }) => (
    <div className="inline fields">
        <div className="ui right floated buttons">
            <button
                className="ui black basic button"
                onClick={()=>{
                    ipcRenderer.send(PRINT);
                }}
            >
                {primerNombre}
            </button>
            <Link to='/menu' className="ui button">
                {segundoNombre}
            </Link>
        </div>
    </div>
)

export default CoustomButton;