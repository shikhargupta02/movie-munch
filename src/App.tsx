import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import axiosInstance from "./api/axiosConfig";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = async (email: string, password: string) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    const response = await axiosInstance.post("/registration/login", {
      email: email,
      password: password,
    });
    console.log(response);
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader loggedIn={isLoggedIn} logoutHandler={logoutHandler} />
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </>
  );
}

export default App;
