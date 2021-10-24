import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import AuthContext from '../../store/auth-context';

const API_KEY = process.env.REACT_APP_API_KEY;

const LoginForm = () => {
  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required').min(6),
  });

  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const submitHandler = async (values) => {
    const { email, password } = values;
    setIsLoading(true);
    try {
      const response = await axios.post(`/accounts:signInWithPassword?key=${API_KEY}`, {
        email,
        password,
      });
      setIsLoading(false);
      // @ts-ignore
      authCtx.login(response.data?.idToken);
      toast.success('Horray!');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.data.error.message);
    }
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} validationSchema={signInSchema} onSubmit={submitHandler}>
      {(props) => {
        const { values, isValid, dirty, handleChange, handleBlur, handleSubmit } = props;
        return (
          <Form onSubmit={handleSubmit} className='mt-6'>
            <div className='pb-2 pt-4'>
              <label htmlFor='email' className='block text-gray-700'>
                Email Address
              </label>
              <Field
                type='email'
                id='email'
                className='basic-input'
                placeholder='Email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage className='text-red-500 pt-1' name='email' component='div' />
            </div>
            <div className='pb-2 pt-4'>
              <label htmlFor='password' className='block text-gray-700'>
                Password
              </label>
              <Field
                type='password'
                id='password'
                placeholder='Enter Password'
                className='basic-input'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <ErrorMessage className='text-red-500 pt-1' name='password' component='div' />
            </div>
            <div className='text-right mt-2'>
              <Link className='link' to='./forgotPassword'>
                Forgot Password?
              </Link>
            </div>
            <div className='px-4 pb-2 pt-4'>
              <button type='submit' disabled={!(isValid && dirty) || isLoading} className='btn btn-green'>
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
