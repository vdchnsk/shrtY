import React ,{ useState, useEffect, useMemo} from 'react'
import { useDispatch , useSelector} from 'react-redux'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import { useHttp } from '../hooks/http.hook';
import { Notification } from "../components/Alert"
import '../scss/_auth.scss';
import { SHOW_ALERT } from '../redux/types';
import {showAlert} from '../redux/alertActions'

export const AuthPage = () =>{
    console.log("rendered")
    const dispatch = useDispatch()
    const alertState = useSelector(state=> state.alerts) //redux global state value
    const {loading, error, request} = useHttp()

    const [form, setForm] = useState (
        {email:"", password:""}
    )
    const changeHandler = event => {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const registerHandle = async () => {
        try{
            // dispatchALert({type:"SHOW_ALERT"})
            const data = await request("/api/auth/register", "POST", {...form})
        } catch(e) {
            dispatch(showAlert(e.message )) //отображаем текст в алерте из бекенда
        }
    }
    
    const logInHandle = async () => {
        try{
            // dispatchALert({type:"SHOW_ALERT"})
            const data = await request("/api/auth/login", "POST", {...form})
        } catch(e) {
            dispatch(showAlert(e.message )) //отображаем текст в алерте из бекенда
        }
    }
    
    return(
        <div className="content__auth">
            <main className="main">
                   <Notification />
                <div className="main__header">
                    <h1 className="main__header-title">Log in to cut</h1>
                </div>
                <div className="main__content_auth">
                        <div className="main__content_auth-fields">
                            <div className="fileds__email field">
                                <h3>Paste here your email</h3>
                                <TextField value={form.email} name="email" onChange={changeHandler} className="form__input" id="standard-search" label="email" type="email" />
                            </div>
                            <div className="fileds__password field">
                                <h3>Paste here your password</h3>
                                <TextField value={form.password} name="password" onChange={changeHandler} className="form__input" id="standard-search" label="password" type="password" />
                            </div>
                        </div>
                        <div className="main__content_auth-buttons">
                            <Button  onClick = { logInHandle } disabled={loading} className="form__button" variant="contained" color="primary">Log In</Button> 
                            <Button onClick = { registerHandle } disabled={loading} className="form__button" variant="contained" color="primary">Regisration</Button>
                        </div>
                    </div>
            </main>
        </div>
    )
}
