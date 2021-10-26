import React from 'react';
import { Fragment } from 'react';

const Layout = (props) => {
  return (
    <Fragment>
      <main className='h-screen overflow-hidden flex items-center justify-center'>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
