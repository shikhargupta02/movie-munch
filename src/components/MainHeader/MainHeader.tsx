import React from "react";
import "./main-header.scss";
import Navigation from "./Navigation";
type mainHeaderType = {
  loggedIn: boolean;
  logoutHandler: () => void;
};
const MainHeader = ({ loggedIn, logoutHandler }: mainHeaderType) => {
  return (
    <header className="main-header">
      <h1>Movie Munch</h1>
      <Navigation loggedIn={loggedIn} onLogout={logoutHandler} />
    </header>
  );
};

export default MainHeader;
