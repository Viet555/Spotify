import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRoute from "./routes/AppRoutes.jsx";
import HeaderApp from "./component/Home/HeaderApp/HeaderApp.jsx";
import Home from "./component/Home/Home.jsx";
import { useLocation } from "react-router-dom";

function App() {
  const [activePath, setActivePath] = useState(location.pathname); // Theo dõi đường dẫn active
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className="container-app">
        <div className="header-app">
          {activePath === "/login" || activePath === "/register" ? (
            ""
          ) : (
            <HeaderApp />
          )}
        </div>
        <div className="content-app">
          <AppRoute />
        </div>
        <div className="footer-app"></div>
      </div>
    </>
  );
}

export default App;
