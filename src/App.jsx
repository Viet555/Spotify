import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRoute from "./routes/AppRoutes.jsx";
import HeaderApp from "./component/Home/HeaderApp/HeaderApp.jsx";
import Home from "./component/Home/Home.jsx";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="container-app">
        <div className="header-app">
          {location.pathname === "/login" ||
          location.pathname === "/register" ? (
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
