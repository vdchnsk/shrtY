import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux'


export const Notification = ({text}) =>{
    const alertProperties = useSelector(state => state.alerts)
    
    if(alertProperties.text !== ""){
        return(
            <Alert severity = "warning">{alertProperties.text}</Alert>
        )
    }else{
        return (
            <div></div>
        )
    }
}