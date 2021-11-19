import React, { Fragment } from 'react';
import { Outlet } from 'react-router';
import SideBar from '../components/UI/SideBar';

function ContentLayout(props) {
  return (
    <Fragment>
      <SideBar />
      <Outlet />
    </Fragment>
  );
}

export default ContentLayout;
