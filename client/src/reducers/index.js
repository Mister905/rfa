import { combineReducers } from "redux";
import planetsReducer from "./planetsReducer";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";

export default combineReducers({
    planets: planetsReducer,
    modal: modalReducer,
    auth: authReducer
});