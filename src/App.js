import PrivateRoute from 'components/Routes/PrivateRoute';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import ContentLayout from 'layout/ContentLayout';
import HomePage from 'pages/HomePage/HomePage';
import PublicRoute from 'components/Routes/PublicRoute';

function App() {
  return (
    <Layout>
      <Switch>
        <PublicRoute path='/' exact component={HomePage}></PublicRoute>
        <ContentLayout>
          <PrivateRoute path='/dashboard' component={DashboardPage}></PrivateRoute>
        </ContentLayout>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
      <ToastContainer />
    </Layout>
  );
}

export default App;
