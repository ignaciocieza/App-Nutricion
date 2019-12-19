import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from "react-redux";

class ChartPeso extends React.Component {

    getData = () => {
        let { pacienteTablas } = this.props;

        return ({
            labels: pacienteTablas.map(tabla => tabla.fechaTabla), //fecha 
            datasets: [
                {
                    label: "Descenso de Peso",
                    fill: false,
                    lineTension: 0,
                    borderColor: 'rgba(255,0,255,0.75)',
                    data: pacienteTablas.map(tabla => tabla.descensoTotal) //peso
                }
            ]
        });
    }


    render() {
        if (this.props.pacienteTablas.length) {
            return (
                <div style={{ position: "relative"}}>
                    <Line
                        options={{
                            responsive: true,
                            title: {
                                display: true,
                                text: 'Gráfico de Peso'
                            },
                            scales: {
                                xAxes: [{
                                    display: true,
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Fecha'
                                    }
                                }],
                                yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Peso (Kg)'
                                    }
                                }]

                            }
                        }}
                        data={this.getData}
                    />
                </div>
            )
        }
        else {
            return "";
        }
    }
}

const mapStateToProps = (estado) => ({
    pacienteTablas: estado.pacientes.pacienteTablas
})

export default connect(mapStateToProps, null)(ChartPeso);
