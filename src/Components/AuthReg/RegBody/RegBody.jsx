import React from 'react';
import reg from './RegScrin.png'
import classes from './RegBody.module.css'
const RegBody = ({children, isActive }) => {
  return (
    <div>
      <img src={reg} className={classes.reg}/>
    </div>
  );
};

export default RegBody;