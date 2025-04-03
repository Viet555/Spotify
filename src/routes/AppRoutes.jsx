import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home.jsx";
import DashboardCenter from "../component/CenterView/DashboardCenter.jsx";
import Login from "../component/Login/Login.jsx";
import Register from "../component/Login/Register.jsx";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<DashboardCenter />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
};
export default AppRoute;
