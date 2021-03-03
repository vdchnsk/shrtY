import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../scss/_auth.scss';

export const AuthPage = () =>{
    return(
        <div className="content__auth">
            <main className="main">
                <div className="main__header">
                    <h1 className="main__header-title">Log in to cut</h1>
                </div>
                <div className="main__content_auth">
                        <div className="main__content_auth-fields">
                            <div className="fileds__email field">
                                <h3>Paste here your email</h3>
                                <TextField className="form__input" id="standard-search" label="email" type="search" />
                            </div>
                            <div className="fileds__password field">
                                <h3>Paste here your password</h3>
                                <TextField className="form__input" id="standard-search" label="password" type="password" />
                            </div>
                        </div>
                        <div className="main__content_auth-buttons">
                            <Button className="form__button" variant="contained" color="primary">Log In</Button>
                            <Button className="form__button" variant="contained" color="primary">Regisration</Button>
                        </div>
                    </div>
            </main>
        </div>
    )
}