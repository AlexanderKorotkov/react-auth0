import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AuthFooter = () => {
  return (
    <Fragment>
      <hr className='my-6 border-gray-300 w-full' />
      <p className='mt-8'>
        Need an account?{' '}
        <Link className='link' to='./signUp'>
          Create an account
        </Link>
      </p>
    </Fragment>
  );
};

export default AuthFooter;
