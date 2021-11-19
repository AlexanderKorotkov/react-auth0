import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PublicRoute = () => {
  const { isAuthenticated } = useAuth0();
  return !isAuthenticated ? <Outlet /> : <Navigate to='/dashboard' />;
};

export default PublicRoute;
