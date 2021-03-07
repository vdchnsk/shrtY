import { combineReducers } from "redux";
import {alertReducer} from './alertReducer'

//ГЛОБАЛЬНЫЙ REDUCER
export const rootReducer = combineReducers({
    alert: alertReducer,
})