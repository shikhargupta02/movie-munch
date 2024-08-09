import React from "react";
import "./navigation.scss";
import { useNavigate } from "react-router-dom";

type navigationType = {
  loggedIn: boolean;
  onLogout: () => void;
};
const Navigation = ({ loggedIn, onLogout }: navigationType) => {
  const navigate = useNavigate();
  const onLoginClick = (): void => {
    navigate("/login");
  };

  const onRegisterClick = (): void => {
    navigate("/register");
  };

  return (
    <div className="nav">
      <ul>
        <li>
          <a href="/">Users</a>
        </li>

        <li>
          <a href="/">Admin</a>
        </li>

        {loggedIn ? (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <button onClick={onLoginClick}>Login</button>
            </li>
            <li>
              <button onClick={onRegisterClick}>Register</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
