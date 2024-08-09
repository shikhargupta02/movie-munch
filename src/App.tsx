import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import axiosInstance from "./api/axiosConfig";
import { Register } from "./components/registeration/Register";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = async (email: string, password: string) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // const response: any = await axiosInstance.post("/registration/login", {
    //   email: email,
    //   password: password,
    // });
    localStorage.setItem("isLoggedIn", "response?.token");
    navigate("/");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          Component={() => (
            <Home loggedIn={isLoggedIn} onLogout={logoutHandler} />
          )}
        />
        <Route
          path="/login"
          Component={() => <Login onLogin={loginHandler} />}
        />
        <Route
          path="/register"
          Component={() => <Register onLogin={loginHandler} />}
        />

        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
    </>
  );
}

export default App;
