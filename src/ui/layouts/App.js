import React from 'react';
import { connect } from "react-redux";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Bienvenida from '../paginas/Bienvenida';

const App = ({hidde}) => {
    return (        
        <React.Fragment>
            <Header />
            {hidde?<Bienvenida/>:""}
            <Main/>
            <Footer/>           
        </React.Fragment>        
    );
}

const mapStateToProps = (store) => ({
    hidde: store.pacientes.hidde
    
});

export default connect(mapStateToProps,null)(App);