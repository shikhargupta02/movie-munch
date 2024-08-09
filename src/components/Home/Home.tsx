import React from "react";

import Card from "../UI/Card/Card";
import "./home.scss";
import MainHeader from "../MainHeader/MainHeader";
type homeType = {
  loggedIn: boolean;
  onLogout: () => void;
};
const Home = ({ loggedIn, onLogout }: homeType) => {
  return (
    <>
      <MainHeader loggedIn={loggedIn} logoutHandler={onLogout} />
      <Card className="home">
        <h1>Welcome back!</h1>
      </Card>
    </>
  );
};

export default Home;
