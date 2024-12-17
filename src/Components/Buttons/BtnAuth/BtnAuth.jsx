import React from 'react';
import classes from './BtnAuth.module.css'
const BtnAuth = ({children, ...props}) => {
  return (
    <button className={classes.btn} {...props} >
      {children}
    </button>
  );
};

export default BtnAuth;