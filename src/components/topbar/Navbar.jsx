import React from 'react'
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom'
import Profile from '../profile/Profile'
import Home from '../../pages/Home'

export default function Navbar() {
    return (
        <>
            <div className="topBarLinks">
                <Router>
                <NavLink to='/' className="topBarLink">Home</NavLink>
                <NavLink to='/profile' className="topBarLink">TimeLine</NavLink>
                <Switch>
                    <Route exact path='/'>
                        <Home></Home>
                    </Route>
                    <Route exact path='/profile'>
                        <Profile></Profile>
                    </Route>
                </Switch>
                </Router>
            </div>  
        </>
    )
}
