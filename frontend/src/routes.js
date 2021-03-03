import React from 'react'
import {Switch, Route , Redirect} from 'react-router-dom'
import {ListOfShortenedLinks} from './pages/ListOfShortenedLinks'
import {CreateLink} from './pages/CreateLink'
import { DetailsPage } from './pages/DetailsPage'
import {AuthPage} from './pages/AuthPage'


export const useRoutes = isAuthenticated =>{ //получаем информациб о том,авторизован ли юзер,перенаправляем его соответсвенно
    if(isAuthenticated){
        return(
            <Switch> //Sitch позволяет рендерить компонент по path
                <Route path="/links"exact> //exact значтит,что строго именно этот path должен быть указан
                    <ListOfShortenedLinks/>
                </Route>
                <Route path="/create"exact>
                    <CreateLink/>
                </Route>
                <Route path="/detail/:id"exact>
                    <DetailsPage/> 
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }
    return ( //если юзер не авторизвован перенаправляем его на главную странцу
        <Switch>
            <Route path="/"exact>
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}