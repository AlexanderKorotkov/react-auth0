import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { useState, useRef, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as Yup from 'yup';
import AuthContext from '../../store/auth-context';

const LoginForm = () => {
  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required').min(6),
  });

  const history = useHistory();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // Add validation
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-fZu25FH6FkGtgjj_BodTNB2bMfX4Gkw';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-fZu25FH6FkGtgjj_BodTNB2bMfX4Gkw';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            const errorMessage = data?.error?.message ? data.error.message : 'Authentication failed';
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace('/');
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
      });
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} validationSchema={signInSchema} onSubmit={submitHandler}>
      {(props) => {
        const { values, touched, errors, isValid, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
        return (
          <Form onSubmit={submitHandler} className='mt-6'>
            <div className='pb-2 pt-4'>
              <label htmlFor='email' className='block text-gray-700'>
                Email Address
              </label>
              <Field
                type='email'
                id='email'
                className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
                placeholder='Email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage className='text-red-500' name='email' component='div' />
            </div>
            <div className='pb-2 pt-4'>
              <label htmlFor='password' className='block text-gray-700'>
                Password
              </label>
              <Field
                type='password'
                id='password'
                placeholder='Enter Password'
                className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <ErrorMessage className='text-red-500' name='password' component='div' />
            </div>
            <div className='text-right mt-2'>
              <Link className='text-blue-500 hover:text-blue-700 font-semibold' to='./forgotPassword'>
                Forgot Password?
              </Link>
            </div>
            <div className='px-4 pb-2 pt-4'>
              <button
                type='submit'
                onClick={switchAuthModeHandler}
                className='w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6'
              >
                Log In
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
