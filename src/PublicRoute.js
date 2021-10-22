import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return <Route {...rest} render={(props) => (isLoggedIn ? <Redirect to='/dashboard' /> : <Component {...props} />)} />;
};

export default PublicRoute;
