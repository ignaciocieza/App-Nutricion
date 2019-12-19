export const seleccionarPaciente = (todosLosPacientes, id) => {
    return todosLosPacientes.find(paciente => paciente.id === parseInt(id))
}

/**
 * Funcion que usa "searchValues", 
 * para buscar productos por el titulo.
 * @param {valores provenientes del store} allProdcuts 
 * @param {*valores ingresados por el usuario} searchValues 
 */
export const filterSearchProducts = (allProdcuts, searchValues) => {
    return allProdcuts.filter(product => {
        return (
            (product.nombre.toLowerCase().indexOf(searchValues.toLowerCase()) !== -1) ||
            (product.apellido.toLowerCase().indexOf(searchValues.toLowerCase()) !== -1)
        );
    });
};

export const filtrarTablaPorPaciente = (currentPaciente, tablas) => {
    return tablas.filter(tabla => (
        tabla.pacienteId === currentPaciente
    ));
};

export const filtrarPacienteTablas = (pacienteTablas, id) => {
    return pacienteTablas.filter(tabla => (
        tabla.id !== id
    ));
};

export const findPacienteTablas = (pacienteTablas, id) => {
    return pacienteTablas.find(tabla => (
        tabla.id === id
    ));
};
