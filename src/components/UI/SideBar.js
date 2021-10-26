import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from 'store/auth-context';

import classes from './SideBar.module.css';

import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBarIcon = ({ icon, text }) => (
  <Link to='/login'>
    <div className={`${classes.sideBarIcon} group`}>
      {icon}
      <span className={`${classes.sideBarTooltip} group-hover:scale-100`}>{text}</span>
    </div>
  </Link>
);

const SideBar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div className={classes.sideBarContainer}>
      <SideBarIcon icon={<FaFire size='28' />} text='Dashboard' />
      <SideBarIcon icon={<BsPlus size='32' />} text='Dashboard2' />
      <SideBarIcon icon={<BsFillLightningFill size='20' />} text='Dashboard3' />
      <SideBarIcon icon={<FaPoo size='20' />} text='Dashboard4' />
    </div>
  );
};

export default SideBar;
