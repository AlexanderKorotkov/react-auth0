import React, { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import ForgotPassForm from '../components/Auth/ForgotPassForm';
import LoginForm from '../components/Auth/LoginForm';
import SignUpForm from '../components/Auth/SignUpForm';
import AuthWrapper from '../components/Auth/AuthWrapper';
import logo from '../assets/img/logo.jpg';

const authPageReducer = (state, action) => {
  switch (action.type) {
    case '/login':
      return {
        logo: logo,
        title: 'Log in to your account',
        page: 'login',
      };
    case '/signUp':
      return {
        logo: logo,
        title: 'Create New Account',
        page: 'signUp',
      };
    case '/forgotPassword':
      return {
        logo: logo,
        title: 'Restore Password',
        page: 'forgotPassword',
      };
    default:
      return state;
  }
};

const AuthPage = () => {
  const location = useLocation();
  const [pageData, dispatchPageData] = useReducer(authPageReducer, {
    logo: logo,
    title: 'Log in to your account',
    page: 'login',
  });

  useEffect(() => {
    // @ts-ignore
    dispatchPageData({ type: location.pathname, logo: 'login', title: 'login' });
  }, [location]);

  return (
    <AuthWrapper pageData={pageData}>
      {pageData.page === 'login' && <LoginForm />}
      {pageData.page === 'signUp' && <SignUpForm />}
      {pageData.page === 'forgotPassword' && <ForgotPassForm />}
    </AuthWrapper>
  );
};

export default AuthPage;
