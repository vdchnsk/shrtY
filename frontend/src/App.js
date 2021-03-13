import React from 'react'
import { useSelector } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import {useRoutes} from './routes'


function App() {
  const authState = useSelector(state=> state.auth) //redux global state value
  console.log(authState)
  const token = authState.token
  // const {token, login, logout, userId} = useAuth()

  const isAuthenticated = !!token // "!!" приводит к boolean
  const routes = useRoutes(isAuthenticated) //передаем значение isAuthenticated в функциию useRoutes в роуатх
  
  return (
    <BrowserRouter>
        <div className="App">
          {routes}
        </div>
    </BrowserRouter>
  );
}

export default App;
