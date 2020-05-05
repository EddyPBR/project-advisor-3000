import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import Recover from './pages/Recover';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Error404 from './pages/Error404';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/recover" component={Recover} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/project" component={Project} />
          <Route path="/page-not-found" component={Error404} />
          <Redirect to="/page-not-found" />
        </Switch>
      </BrowserRouter>
    )
  }
}