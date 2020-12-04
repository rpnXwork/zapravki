import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage'
import MainPage from './pages/MainPage';
import MapPage from './pages/MapPage/MapPage';
import { RegistrationPage } from './pages/RegistrationPage';

export const useRoutes = ({isAuthenticated}) => {

  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/map" exact>
          <MapPage />
        </Route>
        <Route path="/user/:id" exact>
         <div style={{height:"100vh"}}>USer page</div>
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } 

  return (
    <Switch>
      
      <Route path="/" exact>
        <MainPage />
      </Route>
        <Route path="/map" exact>
          <MapPage />
        </Route>
        <Route path="/login" exact>
          <AuthPage />
        </Route>
        <Route path="/registration" exact>
          <RegistrationPage />
        </Route>
      <Redirect to="/" />
    </Switch>
  )
}
