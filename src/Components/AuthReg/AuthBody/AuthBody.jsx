import React, {useState} from 'react';
import classes from './AuthBody.module.css'
import Input from "../../Input/Input";
import BtnAuth from "../../Buttons/BtnAuth/BtnAuth";

  const AuthBody = ({children, isActive }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const authorization = (e) => {
    e.preventDefault()
    if (!login || !password) {
      alert("Логин или пароль не заполнены!");
    }

    if (!login || !password) {
      alert("Логин или пароль не заполнены!");
    }
    else if (login === "qwerty" && password === "qwerty") {
      alert("Вы успешно вошли!");
    }
    else {
      alert("Неверный логин или пароль.");
    }
    setLogin('')
    setPassword('')
  }

  return (
    <div className={classes.authBody}>
      <Input
        onChange={e => setLogin(e.target.value)}
        value={login}
        type='text'
        placeholder='Логин'
      />
      <Input
        onChange={e => setPassword(e.target.value)}
        value={password}
        type='password'
        placeholder='Пароль'
      />
      <form className={classes.form}>
        <div>
          <input id='remember' type='checkbox'/>
          <label for='remember' className={classes.label}>Запомнить меня</label>
        </div>
        <a href='###' className={classes.help}>Не могу войти</a>
      </form>
      <BtnAuth onClick={authorization}>Авторизоваться</BtnAuth>
    </div>
  )
    ;
  };

export default AuthBody;