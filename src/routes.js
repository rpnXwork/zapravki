import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Test from './components/Test';
import {AuthPage} from './pages/AuthPage'
import MainPage from './pages/MainPage';
import MapPage from './pages/MapPage/MapPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ActivatePage } from './pages/ActivatePage';
import User from './pages/User';
import { Changepassword } from './pages/Changepassword';

export const useRoutes = ({isAuthenticated,id}) => {

  let loc = JSON.parse(localStorage.getItem("path"))

  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/map" exact>
          <MapPage/>
        </Route>
        <Route path="/map/station:id" exact>
        <MapPage />
          <Test />
        </Route>
        <Route path="/user/:id" exact>
          <User/>
        </Route>
        <Route path="/activate/:code" exact>
          <ActivatePage />
        </Route>
        <Route path="/user" exact>
          <Redirect to={`/user/${id}`} />
        </Route>
        {loc?<Redirect to={loc} exact/>:<Redirect to="/"/>}
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
        <Route path="/map/station:id" exact>
        <MapPage />
          <Test />
        </Route>
        <Route path="/login" exact>
          <AuthPage />
        </Route>
        <Route path="/registration" exact>
          <RegistrationPage />
        </Route>
        <Route path="/activate/:code" exact>
          <ActivatePage />
        </Route>
        <Route path="/passforgot" exact>
          <Changepassword />
        </Route>
        <Redirect to="/"/>
    </Switch>
  )
}
