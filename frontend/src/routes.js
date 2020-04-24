import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Recover from './pages/Recover';
import List from './pages/List';
import Project from './pages/Project';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/recover" component={Recover} />
          <Route path="/list" exact component={List} />
          <Route path="/project" component={Project} />
        </Switch>
      </BrowserRouter>
    )
  }
}
