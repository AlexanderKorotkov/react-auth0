import React, { Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../assets/img/logo.jpg';

const AuthWrapper = (props) => {
  const location = useLocation();
  return (
    <section className='flex flex-col md:flex-row h-screen items-center w-full'>
      <div className='bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen'>
        <img src={logo} alt='Rack' className='w-full h-full object-cover' />
      </div>

      <div
        className='bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center'
      >
        <div className='w-full h-100'>
          <h1 className='text-xl md:text-2xl font-bold leading-tight mt-12'>Log in to your account</h1>

          {props.children}

          {location.pathname === '/login' && (
            <Fragment>
              <hr className='my-6 border-gray-300 w-full' />
              <p className='mt-8'>
                Need an account?{' '}
                <Link className='text-blue-500 hover:text-blue-700 font-semibold' to='./signUp'>
                  Create an account
                </Link>
              </p>
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthWrapper;
