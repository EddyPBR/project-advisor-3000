import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../utils';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}
      render={ (props) => isAuthenticated() ? <Component {...props} /> : <Redirect to="/" /> }
    />
  );
};
