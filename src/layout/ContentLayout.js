import React, { Fragment } from 'react';
import SideBar from '../components/UI/SideBar';

function ContentLayout(props) {
  return (
    <Fragment>
      <SideBar />
      {props.children}
    </Fragment>
  );
}

export default ContentLayout;
