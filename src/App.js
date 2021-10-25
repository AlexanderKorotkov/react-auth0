import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './layout/Layout';
import AuthPage from './pages/AuthPage/AuthPage';
import 'react-toastify/dist/ReactToastify.css';
import DashboardPage from 'pages/DashboardPage/DashboardPage';

function App() {
  return (
    <Layout>
      <Switch>
        <PublicRoute path={['/', '/login', '/signUp', '/forgotPassword']} exact component={AuthPage}></PublicRoute>
        <PrivateRoute path='/dashboard' component={DashboardPage}></PrivateRoute>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
      <ToastContainer />
    </Layout>
  );
}

export default App;
