import React from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class FormBasico extends React.Component {

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
                onSubmit={this.props.handleSubmit(this.onSubmit) /*handleSubmit, props de "redux-form"*/}
            >
                < div className="three fields" >
                    <Field name='nombre' type='text' component={this.renderField} label='Nombre' />
                    <Field name='apellido' type='text' component={this.renderField} label='Apellido' />
                    <Field name='dni' type='number' component={this.renderField} label='DNI' />
                </div>
                < div className="three fields" >
                    <div className="field">
                        <label>Fecha de Nacimiento</label>
                        <Field name='fechaNacimiento' type='date' component='input' placeholder='Fecha de Nacimiento' />
                    </div>
                    <div className="field">
                        <label>Edad</label>
                        <Field name='edad' type='number' component='input' placeholder='Edad' />
                    </div>
                    <Field name='domicilio' type='text' component={this.renderField} label='Domicilio' />
                </div>
                < div className="three fields" >
                    <div className="field">
                        <label>Teléfono</label>
                        <Field name='telefono' type='text' component="input" label='Teléfono' />
                    </div>
                    <div className="field">
                        <label>E-Mail</label>
                        <Field name='mail' type='email' component="input" label='E-Mail' />
                    </div>
                    <Field name='profesion' type='text' component={this.renderField} label='Profesión' />
                </div>
                < div className="three fields" >
                    <div className="field">
                        <label>¿Cuáles son las razones/motivos por las que consultas?</label>
                        <Field name='motivosConsulta' component='textarea' rows="2" />
                    </div>
                    <div className="field">
                        <label>¿Tenés algún problema de salud que quieras comentar?</label>
                        <Field name='problemaSalud' component='textarea' rows="2" />
                    </div>
                </div>
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Medicación</h4>
                <div className="field">
                    <label>Medicación</label>
                    <Field name='medicacion' component='textarea' rows="2" />
                </div>
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Hábitos</h4>
                <div className="inline fields">
                    <label>¿Fumás?</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="fumas" value='si' />
                            <label>Si</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component='input' type="radio" name="fumas" value='no' />
                            <label>No</label>
                        </div>
                    </div>
                    <div className="two wide field">
                        <Field name='cantidadCigarrillos' component="input" type='text' placeholder="¿Cuantos por día...?" />
                    </div>
                </div>
                <div className="inline field">
                    <label> ¿Cuantas horas dormis por día?</label>
                    <Field name='horasDormir' type='number' component="input" placeholder="¿Cuantas...?" />
                </div>
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Relación con la Actividad Física</h4>
                <div className="grouped fields">
                    <label>1. ¿Cómo consideras que es su estilo de vida?</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="estiloVida" value='MuyActivo' />
                            <label>Muy Activo</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="estiloVida" value='Activo' />
                            <label>Activo</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="estiloVida" value='PocoActivo' />
                            <label>Poco Activo</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="estiloVida" value='Sedentario' />
                            <label>Sedentario</label>
                        </div>
                    </div>
                    <label>2. ¿Cómo definirías tu estado físico? </label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="estadoFisico" value='MuyBueno' />
                            <label>Muy Bueno</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="estadoFisico" value='Bueno' />
                            <label>Bueno</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="estadoFisico" value='PocoActivo' />
                            <label>Poco Activo</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="estadoFisico" value='Regular' />
                            <label>Regular</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="estadoFisico" value='Malo' />
                            <label>Malo</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="estadoFisico" value='MuyMalo' />
                            <label>Muy Malo</label>
                        </div>
                    </div>
                    <label>3. ¿Te gusta realizar actividad física? </label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="realizarActFisica" value='Alta' />
                            <label>Alta</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="realizarActFisica" value='Normal' />
                            <label>Normal</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="realizarActFisica" value='Baja' />
                            <label>Baja</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="realizarActFisica" value='Minima' />
                            <label>Mínima</label>
                        </div>
                    </div>
                </div>
                <div className="inline fields">
                    <label>4. ¿Realizas alguna Actividad Física?</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="cualActFisica" value='si' />
                            <label>Si</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="cualActFisica" value='no' />
                            <label>No</label>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <Field name='cualHacer' component='textarea' rows="1" placeholder="¿Cuál...?" />
                </div>
                <div className="field">
                    <label>5. Si no hace actividad física: ¿Que le gustaría hacer?</label>
                    <Field name='gustariaActHacer' component='textarea' rows="2" />
                </div>
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Peso</h4>
                <div className="inline fields">
                    <label>1.¿Cuál fue tu peso máximo?</label>
                    <div className="ui right labeled input">
                        <Field component="input" name='pesoMax' type="text" placeholder="Ingrese el peso.." />
                        <div className="ui basic label">
                            kg
                    </div>
                    </div>
                </div>
                <div className="inline fields">
                    <label>2.¿Cuál fue tu peso mínimo?</label>
                    <div className="ui right labeled input">
                        <Field component="input" name='pesoMin' type="text" placeholder="Ingrese el peso.." />
                        <div className="ui basic label">
                            kg
                        </div>
                    </div>
                </div>
                <div className="inline fields">
                    <label>3.¿Cual es tu peso deseado?</label>
                    <div className="ui right labeled input">
                        <Field component="input" name='pesoDeseado' type="text" placeholder="Ingrese el peso.." />
                        <div className="ui basic label">
                            kg
                            </div>
                    </div>
                </div>
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Relación con el tratamiento</h4>
                <div className="inline fields">
                    <label>¿Realizo tratamientos anteriormente?</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="realizarTratamiento" value='si' />
                            <label>Si</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="realizarTratamiento" value='no' />
                            <label>No</label>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <Field name='Comentarios' component='textarea' rows="2" placeholder="Comentarios..." />
                </div>
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Alimentación</h4>
                <div className="field">
                    <label>1. ¿Alguna comida le produce molestias? </label>
                    <Field name='comidaMolestia' component='textarea' rows="2" placeholder="¿Cuál...?" />
                </div>
                <div className="grouped fields">
                    <label>2. En su casa la comida es:</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="comidaCasa" value='muyEngordante' />
                            <label>Muy engordante</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="comidaCasa" value='engordante' />
                            <label>Engordante</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="comidaCasa" value='normal' />
                            <label>Normal</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field component="input" type="radio" name="comidaCasa" value='livianaLight' />
                            <label>Liviana/ Light </label>
                        </div>
                    </div>
                </div>
                <div className="inline fields">
                    <label>3.¿Cuantas comidas haces en el día?</label>
                    <div className="two wide field">
                        <Field component="input" type='number' name='comidasAlDia' />
                    </div>
                </div>
                <div className="field">
                    <label>4. ¿Le gustaría incluir en su dieta algún alimento preferido?</label>
                    <Field name='alimentosPreferidos' component='textarea' rows="2" placeholder="¿Cuál...?" />
                </div>
                <div className="field">
                    <label>5. ¿Qué alimentos NO le gustan?</label>
                    <Field name='alimentosNoPreferidos' component='textarea' rows="2" placeholder="¿Cuáles...?" />
                </div>
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Ejemplo de un día tipo</h4>
                <div className="field">
                    <Field name='diaTipo' component='textarea' rows="2" placeholder="Ejemplo..." />
                </div>
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Objetivo y evolución</h4>
                <div className="ui form">
                    <div className="field">
                        <Field name='objYevolucion' component='textarea' placeholder="Objetivo y evolución..." />
                    </div>
                </div>
                {/* ---------------Separacion de Concepto-----------------*/}
                {/* <h4 className="ui horizontal divider header"></h4> */}
                <br></br>
                <button
                    type="submit"
                    className="ui positive button active"
                    style={{ backgroundColor: '#1EA896' }}
                >
                    Guardar
                </button>
                {/* <span>(para crear tabla, primero se debe guardar)</span> */}
            </form>
        )
    }
}
/**
 * Funcion para validar los campos del formulario
 * @param {*campos del formulario} formValues 
 */
const validate = (formValues) => {
    let errors = {};

    if (!formValues.nombre) {
        errors.nombre = 'Ingrese un NOMBRE!';
    }
    if (!formValues.apellido) {
        errors.apellido = 'Ingrese un apellido!';
    }
    if (!formValues.dni) {
        errors.dni = 'Ingrese un DNI!';
    }
    return errors;
};

/**
 * Igualo "FormBasico" a "reduxForm",
 * para poder setear los valores iniciales
 * It will read the initialValues prop provided by connect()
 */
FormBasico = reduxForm({
    form: 'FormPrimeraParte',
    validate,
    enableReinitialize: true
})(FormBasico);


/**
 *"redux-form", leera los valores iniciales de los campos, 
 * al usar la palabra clave 'initialValues' 
 * @param {*estado del reducer "pacienteReducer"} store 
 */
const mapStateToProps = (store) => ({
    initialValues: store.pacientes.pacienteSeleccionado
});

// const mapDispatchToProps = dispatch => ({
//     editPaciente: bindActionCreators(editPaciente, dispatch)
// })

/**
 * Igualo "FormBasico" a connect,
 * para obtener las funciones y estados del store.
 */
FormBasico = connect(mapStateToProps, null)(FormBasico);


export default FormBasico;