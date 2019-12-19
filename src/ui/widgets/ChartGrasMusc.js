import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from "react-redux";

class ChartGrasMusc extends React.Component {
    getSubData = () => {
        return "Otro Titulo";
    }

    getData = () => {
        let { pacienteTablas } = this.props;

        return ({
            labels: pacienteTablas.map(tabla => tabla.fechaTabla), //fecha 
            datasets: [
                {
                    label: "Grasa",
                    fill: false,
                    lineTension: 0,
                    borderColor: 'rgba(255,0,255,0.75)',
                    data: pacienteTablas.map(tabla => (tabla.charGrasa)),//grasa
                    auxData: pacienteTablas.map(tabla => (tabla.totalGrasa))
                },
                {
                    label: "Musculo",
                    fill: false,
                    lineTension: 0,
                    borderColor: 'rgba(0,255,0,0.75)',
                    data: pacienteTablas.map(tabla => tabla.charMusculo), //muscu
                    auxData:pacienteTablas.map(tabla => (tabla.totalMusculo))
                }
            ]
        });
    }

    render() {
        if (this.props.pacienteTablas.length) {
            return (
                <div style={{ position: "relative" }}>
                    <Line
                        options={{
                            responsive: true,
                            title: {
                                display: true,
                                text: 'Gráfico de Grasa y Músculo'
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
                            },
                            tooltips: {
                                enabled: true,
                                mode: 'single',
                                callbacks: {
                                    //1arg, el item. 2do arg, todo el data.
                                    label: (tooltipItems,otherData) =>{
                                        let label=otherData.datasets[tooltipItems.datasetIndex].label;
                                        let multistringText=[];
                                        multistringText.push(`Peso ${label} : ${tooltipItems.value}`);
                                        multistringText.push(`Diferencia de ${label}: ${otherData.datasets[tooltipItems.datasetIndex].auxData[tooltipItems.index]}`);
                                        return multistringText;
                                    }
                                }
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

export default connect(mapStateToProps, null)(ChartGrasMusc);