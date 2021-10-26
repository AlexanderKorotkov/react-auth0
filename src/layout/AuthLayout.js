import React from 'react';
import AuthFooter from '../pages/AuthPage/components/AuthFooter';
import classes from './AuthLayout.module.css';

const AuthLayout = (props) => {
  return (
    <section className={classes.container}>
      <div className={classes.imageWrapper}>
        <img src={props.pageData.logo} alt='Rack' className='w-full h-full object-cover' />
      </div>

      <div className={classes.formContainer}>
        <div className='w-full h-100'>
          <h1 className={classes.title}>{props.pageData.title}</h1>
          {props.children}
          {props.pageData.page === 'login' && <AuthFooter />}
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
