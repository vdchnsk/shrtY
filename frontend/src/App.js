import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from './routes'
// import {} from '@material-ui/core'


function App() {
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
