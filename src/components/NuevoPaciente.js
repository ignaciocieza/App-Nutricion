import React from 'react';

const NuevoPaciente = () => {

    return (
        <React.Fragment>
            <div className="ui segment">
                <h1 className="ui center aligned icon header">Historia Personal</h1>
            </div>
            <div className="ui clearing segment">
                <form class="ui form">
                    <div className="three fields">
                        <div className="field">
                            <label>Nombre</label>
                            <input type="text" id='nombre' placeholder="Nombre" />
                        </div>
                        <div className="field">
                            <label>Apellido</label>
                            <input type="text" id="apellido" placeholder="Apellido" />
                        </div>
                        <div className="field">
                            <label>DNI</label>
                            <input type="text" id="dni" placeholder="DNI" />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Fecha de Nacimiento</label>
                            <input type="text" placeholder="Fecha de Nacimiento" />
                        </div>
                        <div className="field">
                            <label>Edad</label>
                            <input type="text" placeholder="Edad" />
                        </div>
                        <div className="field">
                            <label>Domicilio</label>
                            <input type="text" placeholder="Domicilio" />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Teléfono</label>
                            <input type="text" placeholder="Teléfono" />
                        </div>
                        <div className="field">
                            <label>Mail</label>
                            <input type="text" placeholder="Mail" />
                        </div>
                        <div className="field">
                            <label>Profesión</label>
                            <input type="text" placeholder="Profesión" />
                        </div>
                    </div>
                    <div className="field">
                        <label>¿Cuáles son las razones/motivos por las que consultas?</label>
                        <textarea rows="2"></textarea>
                    </div>
                    <div className="field">
                        <label>¿Tenés algún problema de salud que quieras comentar?</label>
                        <textarea rows="2"></textarea>
                    </div>
                    {/* ---------------Separacion de Concepto-----------------*/}
                    <h4 className="ui horizontal divider header">Medicación</h4>
                    <div className="field">
                        <label>Medicación</label>
                        <textarea rows="2"></textarea>
                    </div>
                    {/* ---------------Separacion de Concepto-----------------*/}
                    <h4 className="ui horizontal divider header">Hábitos</h4>
                    <div className="inline fields">
                        <label for="fumas">¿Fumás?</label>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="fumas" checked="" tabindex="0" className="hidden" />
                                <label>Si</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="fumas" tabindex="0" className="hidden" />
                                <label>No</label>
                            </div>
                        </div>
                        <div className="two wide field">
                            <input type="text" placeholder="¿Cuantos por día...?" />
                        </div>
                    </div>
                    <div className="inline field">
                        <label>¿Cuantas horas dormís por día? </label>
                        <input type="text" placeholder="¿Cuantas horas...?" />
                    </div>
                    {/* ---------------Separacion de Concepto-----------------*/}
                    <h4 className="ui horizontal divider header">Relación con la Actividad Física</h4>
                    <div className="grouped fields">
                        <label for="estiloVida">1. ¿Cómo consideras que es su estilo de vida?</label>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="estiloVida" checked="" tabindex="0" className="hidden" />
                                <label>Muy Activo</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="estiloVida" tabindex="0" className="hidden" />
                                <label>Activo</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="estiloVida" tabindex="0" className="hidden" />
                                <label>Poco Activo</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="estiloVida" tabindex="0" className="hidden" />
                                <label>Sedentario</label>
                            </div>
                        </div>
                        <label for="estadoFisico">2. ¿Cómo definirías tu estado físico? </label>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="estadoFisico" checked="" tabindex="0" className="hidden" />
                                <label>Muy Bueno</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="estadoFisico" tabindex="0" className="hidden" />
                                <label>Bueno</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="estadoFisico" tabindex="0" className="hidden" />
                                <label>Poco Activo</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="estadoFisico" tabindex="0" className="hidden" />
                                <label>Regular</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="estadoFisico" tabindex="0" className="hidden" />
                                <label>Malo</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="estadoFisico" tabindex="0" className="hidden" />
                                <label>Muy Malo</label>
                            </div>
                        </div>
                        <label for="realizarFisico">3. ¿Te gusta realizar actividad física? </label>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="realizarFisico" checked="" tabindex="0" className="hidden" />
                                <label>Alta</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="realizarFisico" tabindex="0" className="hidden" />
                                <label>Normal</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="realizarFisico" tabindex="0" className="hidden" />
                                <label>Baja</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="realizarFisico" tabindex="0" className="hidden" />
                                <label>Mínima</label>
                            </div>
                        </div>
                    </div>
                    <div className="inline fields">
                        <label for="realizarActFisica">4. ¿Realizas alguna Actividad Física?</label>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="realizarActFisica" checked="" tabindex="0" className="hidden" />
                                <label>Si</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="realizarActFisica" tabindex="0" className="hidden" />
                                <label>No</label>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <textarea rows="2" placeholder="¿Cuál...?"></textarea>
                    </div>
                    <div className="field">
                        <label>5. Si no hace actividad física, ¿Que le gustaría hacer?</label>
                        <textarea rows="2"></textarea>
                    </div>
                    {/* ---------------Separacion de Concepto-----------------*/}
                    <h4 className="ui horizontal divider header">Peso</h4>
                    <div className="inline fields">
                        <label>1.¿Cuál fue tu peso máximo?</label>
                        <div className="ui right labeled input">
                            <input type="text" placeholder="Ingrese el peso.." />
                            <div className="ui basic label">
                                kg
                            </div>
                        </div>
                    </div>
                    <div className="inline fields">
                        <label>2.¿Cuál fue tu peso mínimo?</label>
                        <div className="ui right labeled input">
                            <input type="text" placeholder="Ingrese el peso.." />
                            <div className="ui basic label">
                                kg
                            </div>
                        </div>
                    </div>
                    <div className="inline fields">
                        <label>3.¿Cual es tu peso deseado?</label>
                        <div className="ui right labeled input">
                            <input type="text" placeholder="Ingrese el peso.." />
                            <div className="ui basic label">
                                kg
                            </div>
                        </div>
                    </div>
                    {/* ---------------Separacion de Concepto-----------------*/}
                    <h4 className="ui horizontal divider header">Relación con el tratamiento</h4>
                    <div className="inline fields">
                        <label for="realizarTratamiento">¿Realizo tratamientos anteriormente?</label>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="realizarTratamiento" checked="" tabindex="0" className="hidden" />
                                <label>Si</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="realizarTratamiento" tabindex="0" className="hidden" />
                                <label>No</label>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <textarea rows="2" placeholder="Comentarios..."></textarea>
                    </div>
                    {/* ---------------Separacion de Concepto-----------------*/}
                    <h4 className="ui horizontal divider header">Alimentación</h4>
                    <div className="field">
                        <label>1. ¿Alguna comida le produce molestias? </label>
                        <textarea rows="2" placeholder="¿Cuál...?"></textarea>
                    </div>
                    <div className="grouped fields">
                        <label for="comidaCasa">2. En su casa la comida es:</label>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="comidaCasa" checked="" tabindex="0" className="hidden" />
                                <label>Muy engordante</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="comidaCasa" tabindex="0" className="hidden" />
                                <label>Engordante</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="comidaCasa" tabindex="0" className="hidden" />
                                <label>Normal</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="comidaCasa" tabindex="0" className="hidden" />
                                <label>Liviana/ Light </label>
                            </div>
                        </div>
                    </div>
                    <div className="inline fields">
                        <label>3.¿Cuantas comidas haces en el día?</label>
                        <div className="two wide field">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="field">
                        <label>4. ¿Le gustaría incluir en su dieta algún alimento preferido?</label>
                        <textarea rows="2" placeholder="¿Cuál...?"></textarea>
                    </div>
                    <div className="field">
                        <label>5. ¿Qué alimentos NO le gustan?</label>
                        <textarea rows="2" placeholder="¿Cuales...?"></textarea>
                    </div>
                    {/* ---------------Separacion de Concepto-----------------*/}
                    <h4 className="ui horizontal divider header">Ejemplo de un día tipo</h4>
                    <div className="field">
                        <textarea rows="2" placeholder="Ejemplo..."></textarea>
                    </div>

                </form>
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Inputs de Tabla</h4>
                <div className="ui form">
                    <div className="inline fields">
                        <div className="three wide field">
                            <label>Fecha</label>
                            <input type="text" placeholder="Ingrese Fecha..." />
                        </div>
                        {/*--btn Buscar Fecha: tiene que generar una busqueda por fecha y
                        *traer los datos de esa fecha, luego de editarla, 
                        *btn Generar Tabla para generar y guardar.
                        -->*/}
                        <button className='ui button secondary'>
                            Buscar Fecha
                        </button>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Peso</label>
                            <div className="ui right labeled input">
                                <input type="text" placeholder="Ingrese el peso.." />
                                <div className="ui basic label">
                                    kg
                            </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>% De Grasa</label>
                            <div className="ui right labeled input">
                                <input type="text" placeholder="Ingrese el porcentaje..." />
                                <div className="ui basic label">
                                    %
                            </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>% De Músculo</label>
                            <div className="ui right labeled input">
                                <input type="text" placeholder="Ingrese el porcentaje..." />
                                <div className="ui basic label">
                                    %
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>% De Hueso</label>
                            <div className="ui right labeled input">
                                <input type="text" placeholder="Ingrese el porcentaje.." />
                                <div className="ui basic label">
                                    %
                            </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>% De Agua</label>
                            <div className="ui right labeled input">
                                <input type="text" placeholder="Ingrese el porcentaje..." />
                                <div className="ui basic label">
                                    %
                            </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="field">
                                <label>Circ. Cintura</label>
                                <input type="text" placeholder="Circ. Cintura..." />
                            </div>
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Talla</label>
                            <div className="ui right labeled input">
                                <input type="text" placeholder="Ingrese la Talla..." />
                                <div className="ui basic label">
                                    cm
                            </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="field">
                                <label>Descenso</label>
                                <input type="text" placeholder="Ingrese el Descenso..." />
                            </div>
                        </div>
                        <div className="field">
                            <label>IMC</label>
                            <input type="text" placeholder="Ingrese IMC..." />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Desc. Total</label>
                            <input type="text" placeholder="Ingrese el Desc. Total..." />
                        </div>
                        <div className="field">
                            <label>Diuresis</label>
                            <input type="text" placeholder="Ingrese Diuresis..." />
                        </div>
                        <div className="field">
                            <label>Hidratación</label>
                            <input type="text" placeholder="Ingrese Hidratación..." />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Catarsis</label>
                            <input type="text" placeholder="Catarsis..." />
                        </div>
                        <div className="field">
                            <label>Organiz</label>
                            <input type="text" placeholder="Ingrese Organiz..." />
                        </div>
                        <div className="field">
                            <label>Apetito</label>
                            <input type="text" placeholder="Ingrese Apetito..." />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Distribución</label>
                            <input type="text" placeholder="Distribución..." />
                        </div>
                        <div className="field">
                            <label>Movimiento</label>
                            <input type="text" placeholder="Ingrese Movimiento..." />
                        </div>
                    </div>
                    <div className="inline fields">
                        <button className='ui button secondary'>
                            Generar Tabla
                    </button>
                        <button className='ui button secondary'>
                            Generar Grafico
                    </button>
                    </div>
                </div>
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Tabla</h4>
                <table className="ui striped table">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Peso</th>
                            <th>% de Grasa</th>
                            <th>% de Músculo</th>
                            <th>% de Hueso</th>
                            <th>% de Agua</th>
                            <th>Circ Cintura</th>
                            <th>Talla</th>
                            <th>Desc</th>
                            <th>IMC</th>
                            <th>Desc. Total</th>
                            <th>Diuresis</th>
                            <th>Hidratación</th>
                            <th>Catarsis</th>
                            <th>Organiz</th>
                            <th>Apetito</th>
                            <th>Distribución</th>
                            <th>Movimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>September 14, 2013</td>
                            <td>75 Kg</td>
                            <td>24%</td>
                            <td>26%</td>
                            <td>35%</td>
                            <td>45%</td>
                            <td>75 cm</td>
                            <td>11 </td>
                            <td>22 </td>
                            <td>33 </td>
                            <td>44 </td>
                            <td>55 </td>
                            <td>66 </td>
                            <td>77 </td>
                            <td>88</td>
                            <td>99</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>September 29, 2013</td>
                            <td>73 Kg</td>
                            <td>35%</td>
                            <td>29%</td>
                            <td>30%</td>
                            <td>40%</td>
                            <td>75 cm</td>
                            <td>11 </td>
                            <td>22 </td>
                            <td>33 </td>
                            <td>44 </td>
                            <td>55 </td>
                            <td>66 </td>
                            <td>77 </td>
                            <td>88</td>
                            <td>99</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                    </tbody>
                </table>
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Gráfico Peso</h4>
                <img className="ui centered big image" src="" />
                <h4 className="ui horizontal divider header">Gráfico Grasa</h4>
                <img className="ui centered big image" src="" />
                <h4 className="ui horizontal divider header">Gráfico Músculo</h4>
                <img className="ui centered big image" src="" />
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Objetivo y evolución</h4>
                <div className="ui form">
                    <div className="field">
                        <textarea placeholder="Objetivo y evolución..."></textarea>
                    </div>
                </div>
                {/* ---------------Separacion de Concepto-----------------*/}
                <h4 className="ui horizontal divider header">Imprimir - Cancelar - Guardar</h4>
                <div className="inline fields">
                    <button className="ui black basic button">Imprimir</button>
                    <div className="ui right floated buttons">
                        <button className="ui button">Cancelar</button>
                        <div className="or" data-text="o"></div>
                        <button className="ui positive button active">Guardar</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NuevoPaciente;