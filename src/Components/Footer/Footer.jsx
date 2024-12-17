import React from 'react';
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <a href='###' className={classes.a}><p><u>Пользовательское соглашение</u></p></a>
        <a href='###' className={classes.a}><p>Разработано в <u>ФГБОУ «КГТУ»</u></p></a>
      </div>
    </div>
  );
};

export default Footer;