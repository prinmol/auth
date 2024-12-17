import React from 'react';
import classes from './BtnForm.module.css'
const BtnForm = ({children, isActive,  ...props}) => {

  return (
    <button {...props} className={`${classes.BtnForm} ${isActive ? classes.active : ''}`}>
      {children}
    </button>
  );
};

export default BtnForm;