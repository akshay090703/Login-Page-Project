import React, { useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AutoContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  React.useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isLoggedIn");

    if (isUserLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <AutoContext.Provider value={{ isLoggedIn: isLoggedIn }}>
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AutoContext.Provider>
    </React.Fragment> // not needed anymore
  );
}

export default App;
