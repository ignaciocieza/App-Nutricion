import createHistory from 'history/createBrowserHistory';

/**
 * createHistory(), funcion perteneciente a biblioteca history,
 * maneja de manera programaticamente los paths de "route"
 * para que el usuario, en caso de uso web, no pueda ingresar a las pestañas 
 * de forma manual ingresando la ruta en el buscador 
 * y asi evitar que se pueda alterar el orden de las paginas.
 */
export default createHistory();