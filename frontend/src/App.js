import React from 'react'
import { useSelector } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { useAuth } from './hooks/auth.hook'
import {useRoutes} from './routes'


function App() {
  const authState = useSelector(state=> state.auth) //redux global state value
  // const token = authState.token
  const {token, login, logout, userId} = useAuth()
  console.log(token)

  const isAuthenticated = !!token // "!!" приводит к boolean
  const routes = useRoutes(isAuthenticated) //передаем значение isAuthenticated в функциию useRoutes в роуатх
  
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
