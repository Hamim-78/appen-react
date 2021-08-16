import React from "react"
import { Router, Switch } from "react-router-dom"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import Main from "../layouts/Public/Main"

import Appen from '../pages/Appen'


const Routes = () => {

    return (
        <Router history={browserHistory}>
            <Switch>
                <RouteWithLayout
                    component={Appen}
                    exact
                    layout={Main}
                    path='/'
                    title='Appen'
                />
            </Switch>
        </Router>
    )
}


export default Routes
