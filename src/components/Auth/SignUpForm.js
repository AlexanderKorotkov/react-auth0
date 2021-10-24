import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = process.env.REACT_APP_API_KEY;

const SignUpForm = () => {
  const signUpSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required').min(6),
    repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const submitHandler = async (values) => {
    const { email, password } = values;
    setIsLoading(true);
    try {
      const response = await axios.post(`/accounts:signUp?key=${API_KEY}`, {
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
    <Formik
      initialValues={{ email: '', password: '', repeatPassword: '' }}
      validationSchema={signUpSchema}
      onSubmit={submitHandler}
    >
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
            <div className='pb-2 pt-4'>
              <label htmlFor='repeatPassword' className='block text-gray-700'>
                Password
              </label>
              <Field
                type='repeatPassword'
                id='repeatPassword'
                placeholder='Repeat Password'
                className='basic-input'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.repeatPassword}
              />
              <ErrorMessage className='text-red-500 pt-1' name='password' component='div' />
            </div>
            <div className='text-right mt-2'>
              <Link className='link' to='./login'>
                Go To Login
              </Link>
            </div>
            <div className='px-4 pb-2 pt-4'>
              <button type='submit' disabled={!(isValid && dirty) || isLoading} className='btn btn-green'>
                Sign Up
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
