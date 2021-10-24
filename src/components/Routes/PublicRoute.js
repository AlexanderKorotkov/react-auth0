import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from 'store/auth-context';

const PublicRoute = ({ component: Component, ...rest }) => {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn } = authCtx;

  return <Route {...rest} render={(props) => (isLoggedIn ? <Redirect to='/dashboard' /> : <Component {...props} />)} />;
};

export default PublicRoute;
