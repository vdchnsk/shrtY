import { combineReducers } from "redux";
import { alertReducer } from './alertReducer'

//ГЛОБАЛЬНЫЙ REDUCER
export const rootReducer = combineReducers({
    alerts:alertReducer,
})