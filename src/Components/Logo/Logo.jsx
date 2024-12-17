import React from 'react';
import classes from './Logo.module.css'
import Sign from '../../img/Sign.svg'
import Text from '../../img/Text.svg'
import BtnAbout from "../Buttons/BtnAbout/BtnAbout";
const Logo = () => {
  return (
    <div className={classes.logo}>
      <div className={classes.sign}>
        <img src={Sign} alt='sign'/>
        <img src={Text} alt='text' className={classes.text}/>
      </div>
      <p className={classes.sep}></p>
      <BtnAbout/>
    </div>
  );
};

export default Logo;