import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { crearBaseDatos } from '../../api/actions/index';
import Nutri from '../../imagen/nutri.jpg';

class Bienvenida extends Component {
    componentDidMount() {
        this.props.crearBaseDatos();
    }
    render() {
        return (
            <div className="ui clearing segment">
                <img className="ui big centered image" src={Nutri} alt='no hay imagen'></img>
            </div>
        )
    }
}

const mapDispatchProps = dispatch => ({
    crearBaseDatos: bindActionCreators(crearBaseDatos, dispatch)
});


export default connect(null, mapDispatchProps)(Bienvenida);
