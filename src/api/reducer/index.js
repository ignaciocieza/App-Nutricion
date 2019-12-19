import { combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";
import pacienteReducer from './pacienteReducer';

export default combineReducers({
    form: formReducer,
    pacientes: pacienteReducer
});