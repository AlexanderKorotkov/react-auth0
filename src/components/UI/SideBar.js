import React from 'react';
import classes from './SideBar.module.css';

import { BsPlus, BsFillLightningFill, BsArrowBarLeft } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import SideBarIcon from './SideBarIcon';

const SideBar = () => {
  return (
    <div className={classes.sideBarContainer}>
      <SideBarIcon icon={<FaFire size='28' />} text='Dashboard' redirectPath='/dashboard' />
      <SideBarIcon icon={<BsPlus size='32' />} text='Dashboard2' redirectPath='/dashboard' />
      <SideBarIcon icon={<BsFillLightningFill size='20' />} text='Dashboard3' redirectPath='/dashboard' />
      <SideBarIcon icon={<FaPoo size='20' />} text='Dashboard4' redirectPath='/dashboard' />
      <SideBarIcon icon={<BsArrowBarLeft size='20' />} text='Logout' redirectPath='/' />
    </div>
  );
};

export default SideBar;
