import { FolderOpen } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { Loader } from './components/Loader'
import { NavBar } from './components/NavBar'
import { useAuth } from './hooks/auth.hook'
import { changeAuthStatusLogin } from './redux/actions/authActions'
import {useRoutes} from './routes'

function App() {
  const authState = useSelector(state=> state.auth) //redux global state value
  const dispatch = useDispatch()
  const {token, userId , ready} = useAuth()

  if (token && !authState.token){ //елси есть токен а localStorage и нет в глобальном стейте,то мы его туду передаем
    dispatch(changeAuthStatusLogin(token, userId , true))
  }
  const tokens = {
    fromLocalStorage: !!token,
    fromGlobalState: !!authState.token
  }
  let isAuthenticated = null

  if( tokens.fromGlobalState === true ){
    isAuthenticated = true
  } else if ( tokens.fromLocalStorage === true){
    isAuthenticated = true
  }
  const routes = useRoutes(isAuthenticated) //передаем значение isAuthenticated в функциию useRoutes в роуатх
  
  if (!ready) {
    return <Loader/>
  }

  return (
    <BrowserRouter>
    {/* Если пользователь авторизован,то мы показываем ему navbar */}
      {isAuthenticated && <NavBar/>}
        <div className="App">
          {routes}
        </div>
    </BrowserRouter>
  );
}

export default App;
