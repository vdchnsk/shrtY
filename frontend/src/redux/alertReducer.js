import Alert from "@material-ui/lab/Alert"
import { SHOW_ALERT, HIDE_ALERT} from "./types"


const initState = {
    text:"",
    type:"warning"
}

export const alertReducer = (state = initState, action) =>{
    switch(action.type){
        case SHOW_ALERT: return{...state}
        case HIDE_ALERT: return{...state}
        default: return state
    }
} 