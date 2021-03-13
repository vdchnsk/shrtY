import {useState, useCallback, useEffect} from 'react'

const StorageName = 'UserData'


export const useAuth = () =>{
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const login = useCallback((JsonWebToken, id)=>{
        setToken(JsonWebToken)
        setUserId(id)
        localStorage.setItem(StorageName, JSON.stringify(id, JsonWebToken))
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
        if(data && data.token){
            login(data.token, data.userId)
        }
    },[login])

    return {login, logout, token, userId}
}