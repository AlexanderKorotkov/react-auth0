import PrivateRoute from 'components/Routes/PrivateRoute';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import ContentLayout from 'layout/ContentLayout';
import HomePage from 'pages/HomePage/HomePage';
import PublicRoute from 'components/Routes/PublicRoute';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <Layout>
        <div>Loading ...</div>
      </Layout>
    );
  }
  return (
    <Layout>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path='/' element={<HomePage />} />
        </Route>
        {/* <ContentLayout> */}
        <Route element={<ContentLayout />}>
          <Route element={<PrivateRoute />}>
            <Route path='dashboard' element={<DashboardPage />} />
          </Route>
        </Route>

        {/* </ContentLayout> */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
