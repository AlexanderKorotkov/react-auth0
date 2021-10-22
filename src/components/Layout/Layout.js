import { Fragment } from 'react';

import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      {/*<MainNavigation />*/}
      <main className='h-screen overflow-hidden flex items-center justify-center'>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
