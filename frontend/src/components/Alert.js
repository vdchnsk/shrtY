import React from 'react';
import Alert from '@material-ui/lab/Alert';


export const Notification = ({text}) =>{
    if(alert.alertVisibility==true){
        return(
            <Alert severity={alert.type}>{text}</Alert>
        )
    }else{
        return (
            <div></div>
        )
    }
}