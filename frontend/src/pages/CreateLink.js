import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../scss/_createLink.scss"
import { useHttp } from '../hooks/http.hook';

export const CreateLink = () =>{
    const {request} = useHttp()
    const [link , setLink ] = useState("")


    const cutHandler = async () =>{
        console.log({link})
        try{
            const data = await request('api/link/cut' , "POST", {from: link})
            console.log(data)

        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className="wrapper">
            <div className="wrapper__cutLink-main">
                <div className = "wrapper__cutLink__content">
                    <TextField  onChange = {e => setLink(e.target.value)}  value = {link} id="link" className="wrapper__cutLink__content-input" fullWidth="true"  id="standard-basic" label="Your link to cut" />
                    <Button onClick={cutHandler} className="wrapper__cutLink__content-button" variant="contained" color="primary"> Cut </Button>
                </div>
            </div>
        </div>
    )
} 