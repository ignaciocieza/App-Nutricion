import React from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class FormTabla extends React.Component {

    /**
    * Funcion que obtiene los valores del formulario,
    * a traves de la prop "handleSubmit", de "redux-form"
    */
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    /**
     * funcion que genera el contendor del error a mostrar.
     */
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>
                        {error}
                    </div>
                </div>
            );
        }
    }

    /**
     * Funcion que genera y verifica,
     * un Field sólo de tipo "text" 
     */
    renderField = ({ input, label, meta }) => {
        let className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} placeholder={label} />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    render() {       
        return (
            <form
                className="ui form"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Inputs de Tabla</h4>
                <div className="ui form">
                    <div className="three fields">
                        <div className='field'>
                            <label>Fecha</label>
                            <Field type="date" name='fechaTabla' component='input' placeholder="Ingrese Fecha..." />
                        </div>
                        <div className='inline fields'>
                            <label>¿Es fecha inicial del tratamiento?</label>
                            <div className="ui checkbox">
                                <Field component="input" type="checkbox" name="esFechaInicial" value='si' />
                                <label>Si</label>
                            </div>
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <Field name='peso' type="text" component={this.renderField} label="Peso"/> 
                        </div>
                        <div className="field">
                            <Field name='grasa' type="text" component={this.renderField} label="% De Grasa" /> 
                        </div>
                        <div className="field">
                            <Field name='musculo' type="text" component={this.renderField} label="% De Músculo"  />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>% De Hueso</label>
                            <div className="ui right labeled input">
                                <Field name='hueso' type="number" component='input' placeholder="Ingrese el porcentaje..." />
                                <div className="ui basic label">
                                    %
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>% De Agua</label>
                            <div className="ui right labeled input">
                                <Field name='agua' type="number" component='input' placeholder="Ingrese el porcentaje..." />
                                <div className="ui basic label">
                                    %
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>Circ. Cintura</label>
                            <div className="ui right labeled input">
                                <Field name='cintura' type="number" component='input' placeholder="Circ. Cintura.."  />
                                <div className="ui basic label">
                                    cm
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Talla</label>
                            <div className="ui right labeled input">
                                <Field name='talla' type="number" component='input' placeholder="Ingrese la Talla..." />
                                <div className="ui basic label">
                                    cm
                                </div>
                            </div>
                        </div>
                        {/* <div className="field">
                            <div className="field">
                                <label>Descenso</label>
                                <Field name='descenso' type="text" component='input' placeholder="NO INGRESAR???" />
                            </div>
                        </div>
                        <div className="field">
                            <label>Desc. Total</label>
                            <Field name='descensoTotal' type="text" component='input' placeholder="NO INGRESAR???" />
                        </div> */}
                        <div className="field">
                            <label>Distribución</label>
                            <Field name='distribucion' type="text" component='input' placeholder="Distribución..."  />
                        </div>
                        <div className="field">
                            <label>Movimiento</label>
                            <Field name='movimiento' type="text" component='input' placeholder="Ingrese Movimiento..." />
                        </div>
                    </div>
                    <div className="three fields">

                        <div className="field">
                            <label>IMC</label>
                            <Field name='imc' type="text" component='input' placeholder="Ingrese IMC..." />                        </div>
                        <div className="field">
                            <label>Diuresis</label>
                            <Field name='diuresis' type="text" component='input' placeholder="Ingrese Diuresis..."  />
                        </div>
                        <div className="field">
                            <label>Hidratación</label>
                            <Field name='hidratacion' type="text" component='input' placeholder="Ingrese Hidratación..."  />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Catarsis</label>
                            <Field name='catarsis' type="text" component='input' placeholder="Ingrese Catarsis..."  />
                        </div>
                        <div className="field">
                            <label>Organiz</label>
                            <Field name='organiz' type="text" component='input' placeholder="Ingrese Organiz..."  />
                        </div>
                        <div className="field">
                            <label>Apetito</label>
                            <Field name='apetito' type="text" component='input' placeholder="Ingrese Apetito..."   />
                        </div>
                    </div>
                    {/* <div className="three fields">
                        <div className="field">
                            <label>Distribución</label>
                            <Field name='distribucion' type="text" component='input' placeholder="Distribución..." />
                        </div>
                        <div className="field">
                            <label>Movimiento</label>
                            <Field name='movimiento' type="text" component='input' placeholder="Ingrese Movimiento..." />
                        </div>
                    </div> */}
                    <br></br>
                    <div className="inline fields">
                        <button
                            type="submit"
                            className='ui secondary button'
                        >
                            Generar Tabla y Gráfico
                        </button>
                    </div>
                </div>
            </ form>
        )
    }
}

/**
 * Funcion para validar los campos del formulario
 * @param {*campos del formulario} formValues 
 */
const validate = (formValues) => {
    let errors = {};

    if (!formValues.peso) {
        errors.peso = 'Ingrese un NOMBRE!';
    }
    if (!formValues.musculo) {
        errors.musculo = 'Ingrese un NOMBRE!';
    }
    if (!formValues.grasa) {
        errors.grasa = 'Ingrese un NOMBRE!';
    }
    return errors;
};

FormTabla=reduxForm({
    form: "tabla",
    validate,
    enableReinitialize: true
})(FormTabla);

const mapStateToProps=(estado)=>({ 
    initialValues: estado.pacientes.valoresDelEditTabla,
});


FormTabla = connect(mapStateToProps, null)(FormTabla);


export default FormTabla;