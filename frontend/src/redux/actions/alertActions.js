import {SHOW_ALERT, HIDE_ALERT} from "../types"

export function showAlert (text ) {
    return {
        type:SHOW_ALERT,
        payload:text,
    }
}
export function hideAlert(){
    return {
        type:HIDE_ALERT
    }
}