import React from 'react';
import { useLocation } from 'react-router-dom';
import ForgotPassForm from '../components/Auth/ForgotPassForm';
import LoginForm from '../components/Auth/LoginForm';
import SignUpForm from '../components/Auth/SignUpForm';
import AuthWrapper from '../components/UI/AuthWrapper';

const AuthPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <AuthWrapper>
      {location.pathname === '/login' && <LoginForm />}
      {location.pathname === '/signUp' && <SignUpForm />}
      {location.pathname === '/forgotPassword' && <ForgotPassForm />}
    </AuthWrapper>
  );
};

export default AuthPage;
