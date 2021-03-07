import { SHOW_ALERT, HIDE_ALERT} from "./types"

const initState = {
    alert:null
}

export const alertReducer = (state = initState, action) =>{
    switch(action.type){
        case SHOW_ALERT: return{...state, alert: action.payload}
        case HIDE_ALERT: return{...state, alert: null}
        default: return state
    }
} 