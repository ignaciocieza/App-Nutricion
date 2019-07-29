import React from 'react';
import { Router, Route } from "react-router-dom";
import Header from './Header';
import history from '../history';
import NuevoPaciente from './NuevoPaciente';
import MenuPrincipal from './MenuPrincipal';
import EnDesarrollo from './EnDesarrollo';
import AddAbaseDatos from './AddAbaseDatos';

/**
 * <React.Fragment>, fragmento padre de react que reemplaza el <div> cuando 
 * no se quiere hacer una nueva division.
 * history={history}, evita que se pueda alterar el orden de las paginas, 
 * entrando manualmente la direccion por el explorador, es decir, solo se puede programaticamente.
 * exact component, indicia que no se debe concatenar los componentes. 
 *  Si se pone "component" solo, entonces, se concantenan los componentes.
 */
const App = () => {
    return (
        <Router history={history}>
            <React.Fragment>
                <Header />
                <Route path='/' exact component={MenuPrincipal}/>
                <Route path='/NuevoPaciente' exact component={NuevoPaciente} />
                <Route path ='/EnDesarrollo' exact component={EnDesarrollo}/>
                <Route path ='/AddAbaseDatos' exact component={AddAbaseDatos}/>
            </React.Fragment>
        </Router>
    );
}
export default App;