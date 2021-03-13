import {CHANGE_AUTHON_LOGIN, CHANGE_AUTHON_LOGOUT} from "../types"


const nothing = ()=>{} //just dont ask

const initState = {
    token:null,
    userId:null,
    login:nothing,
    logout:nothing,
    isAuthenticated:false
}

export const authtReducer = (state = initState, action) =>{
    switch(action.type){
        case CHANGE_AUTHON_LOGIN:return {state, token:action.token , userId:action.userId}
        default: return state
    }
} 