import React, { useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHttp } from '../hooks/http.hook';
import { useHistory } from 'react-router';
import "../scss/_createLink.scss"

export const CreateLink = () =>{
    const history = useHistory()
    const dispatch = useDispatch()
    const globalState = useSelector(state=> state) //redux global state value

    const {request} = useHttp()
    const [link , setLink ] = useState("")


    const cutHandler = async () =>{
        try{
            const data = await request('/api/link/cut' , 'POST', {from: link} , {authorization:`Bearer ${globalState.auth.token}`})
            history.push(`/detail/${data.link._id}`)
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className="wrapper">
            <div className="wrapper__cutLink-main">
                <div className = "wrapper__cutLink__content">
                    <TextField  onChange = {e => setLink(e.target.value)}  value = {link} className="wrapper__cutLink__content-input"  id="standard-basic" label="Your link to cut" />
                    <Button onClick={cutHandler} className="wrapper__cutLink__content-button" variant="contained" color="primary"> Cut </Button>
                </div>
            </div>
        </div>
    )
} 