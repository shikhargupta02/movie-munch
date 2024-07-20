import React, { useState, useReducer } from "react";
import Card from "../UI/Card/Card";
import "./login.scss";
import Button from "../UI/Button/Button";
import {
  EmailAction,
  EmailState,
  PasswordAction,
  PasswordState,
} from "../common";

const emailReducer = (state: EmailState, action: EmailAction): EmailState => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (
  state: PasswordState,
  action: PasswordAction
): PasswordState => {
  if (action.type === "PASSWORD_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};
type loginType = { onLogin: (email: string, password: string) => void };
const Login = ({ onLogin }: loginType) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // useEffect(() => {
  //     const indentifier = setTimeout(() => {
  //         setFormIsValid(emailState.isValid && passwordState.value.trim().length > 6);
  //     }, 500);
  //     return () => {
  //         clearTimeout(indentifier);
  //     };
  // }, [emailState.value, passwordState.value]);

  const emailChangeHandler = (event: any) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(
      event.target.value.trim().includes("@") && passwordState.isValid
    );
  };
  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });
    setFormIsValid(
      event.target.value.length > 6 && emailState.isValid === true
    );
    // setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR", val: "" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR", val: "" });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <div
          className={`control ${emailState.isValid === false ? "invalid" : ""}`}
        >
          <label htmlFor="email"> E - Mail </label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`control ${
            passwordState.isValid === false ? "invalid" : ""
          }`}
        >
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
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
