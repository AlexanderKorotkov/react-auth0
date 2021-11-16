import React from 'react';
import { Redirect } from 'react-router-dom';
import classes from './SideBarIcon.module.css';
import { useAuth0 } from '@auth0/auth0-react';

function SideBarIcon({ icon, text, redirectPath }) {
  const { logout } = useAuth0();
  const clickHandler = () => {
    if (text === 'Logout') {
      logout();
    }
    return <Redirect push to={redirectPath} />;
  };

  return (
    <div onClick={clickHandler}>
      <div className={`${classes.sideBarIcon} group`}>
        {icon}
        <span className={`${classes.sideBarTooltip} group-hover:scale-100`}>{text}</span>
      </div>
    </div>
  );
}

export default SideBarIcon;
