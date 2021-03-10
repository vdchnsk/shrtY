import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import {useRoutes} from './routes'


function App() {
  const {token, login, logout, userId} = useAuth()
  const routes = useRoutes(false) //передаем значение isAuthenticated в функциию useRoutes в роуатх
  return (
    <BrowserRouter>
        <div className="App">
          {routes}
        </div>
    </BrowserRouter>
  );
}

export default App;
