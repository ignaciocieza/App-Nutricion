import React from 'react';
import { Link } from "react-router-dom";

const BtnCrearPaciente = () => (
    <div style={{ textAlign: "right" }}>
        <Link to='/paciente/new' className='ui button large primary'>
            Nuevo Paciente
        </Link>
    </div>
);

export default BtnCrearPaciente;

