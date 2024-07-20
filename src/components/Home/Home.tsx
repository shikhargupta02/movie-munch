import React from "react";

import Card from "../UI/Card/Card";
import "./home.scss";
type homeType = {
  onLogout: () => void;
};
const Home = ({ onLogout }: homeType) => {
  return (
    <Card className="home">
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
