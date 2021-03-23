import React ,{ useState} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHttp } from '../hooks/http.hook';
import { Notification } from "../components/Alert"
import '../scss/_auth.scss';
import {showAlert} from '../redux/actions/alertActions'
import { changeAuthStatusLogin } from '../redux/actions/authActions'
import { useAuth } from '../hooks/auth.hook';

export const AuthPage = () =>{
    const dispatch = useDispatch()
    // const globalState = useSelector(state=> state) //redux global state value
    const {loading, request} = useHttp()
    const { login } = useAuth()
    

    const [form, setForm] = useState (
        {email:"", password:""}
    )
    const changeHandler = event => {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const registerHandle = async () => {
        try{
            const data = await request("/api/auth/register", "POST", {...form})
        } catch(e) {
            dispatch(showAlert(e.message )) //отображаем текст в алерте из бекенда
        }
    }
    
    const logInHandle = async () => {
        try{
            const data = await request("/api/auth/login", "POST", {...form})
            login(data.JsonWebToken , data.userId)
            dispatch(changeAuthStatusLogin(data.JsonWebToken , data.userId , true))
            // window.location.reload();
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
                                <TextField value={form.email} name="email" onChange={changeHandler} className="form__input" id="standard-search" label="email" type="email" />
                            </div>
                            <div className="fileds__password field">
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
