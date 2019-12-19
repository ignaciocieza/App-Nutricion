import React from 'react';
import EncabezadoBody from '../widgets/EncabezadoBody';
import ListaPacientes from '../paginas/ListaPacientes';

const Body = () => (
    <React.Fragment>
        <EncabezadoBody />        
        <ListaPacientes />
    </React.Fragment>
);

export default Body;