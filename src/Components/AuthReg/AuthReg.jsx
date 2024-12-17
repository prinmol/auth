import React, {useState} from 'react';
import classes from './AuthReg.module.css'
import BtnForm from "../Buttons/BtnForm/BtnForm";
import AuthBody from "./AuthBody/AuthBody";
import RegBody from "./RegBody/RegBody";
const AuthReg = () => {
  const [activeForm, setActiveForm] = useState('logIn')


  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.formTab}>
          <BtnForm
            onClick={() => setActiveForm('logIn')}
            isActive={activeForm === 'logIn'}
          >Вход</BtnForm>
          <BtnForm
            onClick={() => setActiveForm('reg')}
            isActive={activeForm === 'reg'}
          >Регистрация</BtnForm>
        </div>
        {activeForm === 'logIn' && <AuthBody/>}
        {activeForm === 'reg' && <RegBody/>}
      </div>
    </div>
  );
};

export default AuthReg;