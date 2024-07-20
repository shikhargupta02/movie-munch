import React from "react";
import "./navigation.scss";

type navigationType = {
  loggedIn: boolean;
  onLogout: () => void;
};
const Navigation = ({ loggedIn, onLogout }: navigationType) => {
  return (
    <div className="nav">
      <ul>
        {loggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {loggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {loggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
