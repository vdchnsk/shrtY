import React from 'react'
import {NavLink , useHistory} from 'react-router-dom'
import { useAuth } from '../hooks/auth.hook'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LinkIcon from '@material-ui/icons/Link';
import CreateIcon from '@material-ui/icons/Create';
import '../scss/_navBar.scss'



export const NavBar = ()=>{
    // const history = useHistory()
    const {token, login, logout, userId} = useAuth()

    const logOutHandler = event => {
        event.preventDefault()
        logout()
        // history.push("/")
        window.location.reload();
    }
    return(
        <nav className="navBar">
        <div className="navBar__wrapper">
            <span className="navBar__logo">Link Cutter</span>
            <ul className="navBar__nav">
                <li className="navBar__nav-list"> <NavLink to="/create" > Create <CreateIcon className="nav-list__linkIcon" /> </NavLink>  </li>
                <li className="navBar__nav-list"> <NavLink to="/links" > My links <LinkIcon className="nav-list__linkIcon" /> </NavLink> </li>
                <li className="navBar__nav-list"> <a href="/" onClick={ logOutHandler }> Log out  <ExitToAppIcon className="nav-list__linkIcon" /> </a> </li>
            </ul>
        </div>
    </nav>
    )
}