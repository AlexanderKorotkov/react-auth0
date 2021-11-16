import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common = {
  Authorization: null,
  'Content-Type': 'application/json',
};

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error.response);
  },
);

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      audience={process.env.AUTH0_AUDIENCE}
      scope={process.env.AUTH0_SCOPE}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
