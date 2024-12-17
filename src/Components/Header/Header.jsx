import React from 'react';
import classes from './Header.module.css'
import Logo from "../Logo/Logo";
import BtnLogIn from "../Buttons/BtnLogIn/BtnLogIn";
const Header = () => {
  return (
    <header className={classes.wrapper}>
      <div className={classes.container}>
        <Logo/>
        <BtnLogIn/>
      </div>
    </header>
  );
};

export default Header;