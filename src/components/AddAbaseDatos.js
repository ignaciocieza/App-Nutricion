import {useEffect, useState } from 'react';

/*
const { ipcRenderer } = require('electron');
let obj = new Object();
obj.name = "Nose ";
obj.address = "nose";*/

/**
 * Hacer: funcion que guarde en electron y se llame de este componente.
 *        funcion: debe ser anonima sin estar relacionada con constante.
 */

const AddAbaseDatos = () => {
    const [resources, setResources] = useState('No entro');

    useEffect(
        () => {
            //ipcRenderer.send("paciente:nuevo", obj);
            setResources('Entro');
        },
    []); 

    return resources;
};

export default AddAbaseDatos; 