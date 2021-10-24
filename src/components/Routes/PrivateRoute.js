import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from 'store/auth-context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn } = authCtx;
  console.log(isLoggedIn);

  return <Route {...rest} render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to='/login' />)} />;
};

export default PrivateRoute;
