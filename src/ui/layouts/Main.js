import React from 'react';
import { Route, Switch } from "react-router-dom";
import Body from './Body';
import CrearPaciente from '../paginas/CrearPaciente';
import EditarPaciente from '../paginas/EditarPaciente';
import DeletePaciente from '../paginas/DeletePaciente';
import CrearTabla from '../paginas/CrearTabla';

const Main = () => (
    <Switch>        
        <Route path='/menu' exact component={Body} />
        <Route path='/search' exact component={Body} />
        <Route path='/tabla' exact component={CrearTabla} />
        <Route path='/paciente/new' exact component={CrearPaciente} />
        <Route path='/paciente/edit/:id' exact component={EditarPaciente} />
        <Route path='/paciente/delete/:id' exact component={DeletePaciente} />
    </Switch>
);

export default Main;
