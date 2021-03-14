import {useState, useCallback, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { changeAuthStatusLogin } from '../redux/actions/authActions'

const StorageName = 'UserData'
const dispatch = useDispatch

export const useAuth = () =>{
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

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
        console.log("data was requiered")
        if(data && data.token){
            login(data.token, data.userId)
        }
    },[login])


    dispatch(changeAuthStatusLogin(token, userId))// диспатчим изменения в глобальное состояние (на всякий случай)

    return {login, logout, token, userId}
}