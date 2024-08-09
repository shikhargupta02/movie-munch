import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import "./register.scss";
import Button from "../UI/Button/Button";
import { validateEmail, validatePassWord } from "../Login/login-helper";
import { rulesCheckedType } from "../common-types";

type registerType = { onLogin: (email: string, password: string) => void };
export const Register = ({ onLogin }: registerType) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const [showPasswordRules, setShowPasswordRules] = useState<boolean>(false);
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
  const [usernameIsValid, setUsernameIsValid] = useState<boolean>(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [rulesChecked, setRulesChecked] = useState<rulesCheckedType>({
    hasNumber: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasSpecialChar: false,
    minLength: false,
  });
  const emailChangeHandler = (event: any) => {
    const validEmail = validateEmail(event?.target?.value);
    setEmailIsValid(validEmail);
  };
  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event?.target?.value;
    const validPassword = validatePassWord(value);
    setPasswordIsValid(validPassword);
    setRulesChecked({
      hasUpperCase: /[A-Z]/.test(value),
      hasLowerCase: /[a-z]/.test(value),
      hasNumber: /\d/.test(value),
      hasSpecialChar: /[!@+\-#$%&*]/.test(value),
      minLength: value.length >= 8,
    });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    onLogin(event?.target[0]?.value, event?.target[1]?.value);
  };
  const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameIsValid(event?.target?.value.trim().length > 0 ? true : false);
  };
  useEffect(() => {
    if (passwordIsValid && emailIsValid) {
      setFormIsValid(true);
    }
  }, [passwordIsValid, emailIsValid]);
  return (
    <div className="registeration-page">
      <Card className="register">
        <h2 className="register-form-heading">Sign Up</h2>
        <form onSubmit={submitHandler}>
          <div
            className={`register-control ${
              usernameIsValid === false ? "invalid" : ""
            }`}
          >
            <input
              type="text"
              id="username"
              placeholder="Username"
              onChange={onUserNameChange}
            />
          </div>
          <div
            className={`register-control ${
              emailIsValid === false ? "invalid" : ""
            }`}
          >
            <input
              type="email"
              id="email"
              placeholder="E - Mail"
              onChange={emailChangeHandler}
            />
          </div>
          <div
            className={`register-control ${
              passwordIsValid === false ? "invalid" : ""
            }`}
          >
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={passwordChangeHandler}
              onFocus={() => setShowPasswordRules(true)}
              onBlur={() => setShowPasswordRules(false)}
            />
            {/* {showPasswordRules && ( */}

            {/* )} */}
          </div>
          <div>
            <ul
              className={`
        ${
          showPasswordRules
            ? "show-password-rules-tooltip"
            : "hide-password-rules-tooltip"
        }
        ${passwordIsValid ? "password-valid" : "password-invalid"}
        
        `}
            >
              <li className={rulesChecked.hasUpperCase ? "tick" : "cross"}>
                At least one uppercase letter
              </li>
              <li className={rulesChecked.hasLowerCase ? "tick" : "cross"}>
                At least one lowercase letter
              </li>
              <li className={rulesChecked.hasNumber ? "tick" : "cross"}>
                At least one number
              </li>
              <li className={rulesChecked.hasSpecialChar ? "tick" : "cross"}>
                At least one special character (!@+-#$%&*)
              </li>
              <li className={rulesChecked.minLength ? "tick" : "cross"}>
                At least 8 characters long
              </li>
            </ul>
          </div>
          <div className="register-actions">
            <Button type="submit" className="btn" disabled={!formIsValid}>
              Register
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
