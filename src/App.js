import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <PublicRoute path={['/', '/login', '/signUp', '/forgotPassword']} exact component={AuthPage}></PublicRoute>
        <PrivateRoute path='/dashboard' component={HomePage}></PrivateRoute>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
      <ToastContainer />
    </Layout>
  );
}

export default App;
