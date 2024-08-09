import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import "./login.scss";
import Button from "../UI/Button/Button";
import { validateEmail, validatePassWord } from "./login-helper";

type loginType = { onLogin: (email: string, password: string) => void };
const Login = ({ onLogin }: loginType) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event: any) => {
    const validEmail = validateEmail(event?.target?.value);
    setEmailIsValid(validEmail);
  };
  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const validPassword = validatePassWord(event?.target?.value);
    setPasswordIsValid(validPassword);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    onLogin(event?.target[0]?.value, event?.target[1]?.value);
  };
  useEffect(() => {
    if (passwordIsValid && emailIsValid) {
      setFormIsValid(true);
    }
  }, [passwordIsValid, emailIsValid]);
  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <div className={`control ${emailIsValid === false ? "invalid" : ""}`}>
          <label htmlFor="email"> E - Mail </label>
          <input type="email" id="email" onChange={emailChangeHandler} />
        </div>
        <div
          className={`control ${passwordIsValid === false ? "invalid" : ""}`}
        >
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
          />
        </div>
        <div className="actions">
          <Button type="submit" className="btn" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
