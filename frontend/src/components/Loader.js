import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import "../scss/_loader.scss"

export const Loader = () =>{    
    return (
        <div className="loader" >
            <CircularProgress color="primary" />
        </div>
    )
}