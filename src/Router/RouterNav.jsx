import React, {useContext} from 'react'
import Home from '../pages/Home';
import Profile from '../components/Profile/Profile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Login from '../pages/Login/Login';
import Registration from "../pages/registration/Registration";
import {AuthContext} from "../Context/AuthContext";
export default function RouterNav() {
    const {user} = useContext(AuthContext)
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    {user ? <Home></Home> : <Login></Login>}
                </Route>
                <Route exact path='/login'>
                    {user ? <Redirect to='/'/> : <Login></Login>}
                </Route>
                <Route exact path='/registration'>
                    {user ? <Redirect to='/'/> : <Registration></Registration>}
                </Route>
                <Route exact path='/profile/:username'>
                    <Profile></Profile>
                </Route>
                <Route path='*'>
                    <h1>Not Found Data</h1>
                </Route>
            </Switch>
        </Router>
    )
}
