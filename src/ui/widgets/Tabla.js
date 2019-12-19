import React from 'react';
import { connect } from "react-redux";
import ReactTable from 'react-table';
import { deleteTable, cargarFormDeTabla } from '../../api/actions/index';
import { bindActionCreators } from "redux";
import 'react-table/react-table.css';


const Tabla = ({ pacienteTablas, deleteTable, cargarFormDeTabla }) => {
    const columns = [
        {
            Header: "Editar",
            Cell: (e) => {
                return (
                    <button
                        className='ui secondary button'
                        onClick={() => cargarFormDeTabla(e.original.id)}
                    >
                        Editar
                    </button>
                )
            },
            sortable: false,
            filterable: false,
            width: 100,
            maxWidth: 100,
            minWidth: 100
        },
        {
            Header: "Borrar",
            Cell: (e) => {
                return (
                    /**
                     *  cuando se crea la tabla,
                     *  se cargan todos los datos aunque no se muestren en el "row"
                     */
                    <button
                        className='ui secondary button'
                        onClick={() => deleteTable(e.original.id)}
                    >
                        Borrar
                    </button>
                )
            },
            sortable: false,
            filterable: false,
            width: 100,
            maxWidth: 100,
            minWidth: 100
        },
        {
            Header: "Fecha",
            accessor: "fechaTabla",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Fecha Inicial",
            accessor: "esFechaInicial",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Peso",
            accessor: "peso",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "% de Grasa",
            accessor: "grasa",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "% de Músculo",
            accessor: "musculo",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "% de Hueso",
            accessor: "hueso",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "% de Agua",
            accessor: "agua",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Desc",
            accessor: "descenso",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Desc. Total",
            accessor: "descensoTotal",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Circ Cintura",
            accessor: "cintura",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Talla",
            accessor: "talla",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Distribución",
            accessor: "distribucion",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Movimiento",
            accessor: "movimiento",
            style: {
                textAlign: "center"
            },
            width: 100,
            maxWidth: 100,
            minWidth: 100
        },
        {
            Header: "IMC",
            accessor: "imc",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Diuresis",
            accessor: "diuresis",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Hidratación",
            accessor: "hidratacion",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Catarsis",
            accessor: "catarsis",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Organiz",
            accessor: "organiz",
            style: {
                textAlign: "center"
            }
        },
        {
            Header: "Apetito",
            accessor: "apetito",
            style: {
                textAlign: "center"
            }
        },


    ]
    return (
        <ReactTable
            columns={columns}
            data={pacienteTablas}
            defaultPageSize={10}
            noDataText={"Espere..."}
        >
        </ReactTable>
    )
};

const mapStateToProps = (store) => ({
    pacienteTablas: store.pacientes.pacienteTablas
});

const mapDispatchProps = dispatch => ({
    deleteTable: bindActionCreators(deleteTable, dispatch),
    cargarFormDeTabla: bindActionCreators(cargarFormDeTabla, dispatch),
    // resetCurrentTable: bindActionCreators(resetCurrentTable,dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(Tabla);
