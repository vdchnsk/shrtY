import {useState, useCallback, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAuthStatusLogin, changeAuthStatusLogout } from '../redux/actions/authActions'

const StorageName = 'UserData'

export const useAuth = () =>{
    
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    // const authState = useSelector(state=> state.auth) //redux global state value
    // const dispatch = useDispatch()

    const login = useCallback((JsonWebToken, id)=>{
        setToken(JsonWebToken)
        setUserId(id)
        localStorage.setItem(StorageName, JSON.stringify({userId:id, token:JsonWebToken}))
    },[])

    const logout = useCallback(()=>{
        //очищаем state
        setToken(null)
        setUserId(null)
        //очищаем local storage
        localStorage.removeItem(StorageName)
    },[])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(StorageName)) // JSON.parse приводит строку к объекту
        // console.log("data was requiered")
        if(data && data.token){
            login(data.token, data.userId)
        }
    },[login])


    // dispatch(changeAuthStatusLogout(token, userId , true))
    // console.log(authState)
    return {login, logout, token, userId}
}