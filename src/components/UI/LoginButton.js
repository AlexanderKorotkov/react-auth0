import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = (props) => {
  const { loginWithPopup } = useAuth0();

  return (
    <button
      className={`flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ${props.classes}`}
      onClick={() => loginWithPopup()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
