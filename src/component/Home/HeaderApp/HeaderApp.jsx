import "./HeaderApp.scss";
import avt from "../../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SidebarManage from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../Store/Export";
const HeaderApp = () => {
  const infoUser = useSelector((state) => state.user.account);
  const isAuthen = useSelector((state) => state.user.isauthentic);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activePath, setActivePath] = useState(location.pathname);
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {}, [infoUser, isAuthen]);
  const [collapsed, setCollapsed] = useState(true);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  const handleLogout = () => {
    dispatch(action.userLogout());
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };
  return (
    <>
      <div className="container-header">
        <div className="content-header-left">
          <span>
            <i className="fa-solid fa-ellipsis"></i>
            <i className="fa-solid fa-arrow-left"></i>
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
        <div className="content-header-center">
          <div className="content-center">
            <div
              className={
                activePath === "/" ? `icon-home active-route` : "icon-home"
              }
              onClick={() => navigate("/")}
            >
              <i className="fa-solid fa-house"></i>
            </div>
            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
              <input
                className="form-control col-8"
                placeholder="What do you want to play?"
              />
              <i className="fa-solid fa-window-maximize browse-icon"></i>
            </div>
          </div>
        </div>
        <div className="content-header-right">
          <div className="content-right">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-people-group"></i>
            <img
              src={infoUser?.avatar ? infoUser?.avatar : avt}
              onClick={() => navigate(isAuthen === false ? "/login" : "/")}
            />
            {isAuthen === true && (
              <i
                className="fa-solid fa-right-from-bracket"
                title="Logout"
                onClick={() => handleLogout()}
              ></i>
            )}
            {infoUser?.roleId === "Admin" ? (
              <>
                <button
                  className="toggle-sidebar"
                  onClick={toggleSidebar}
                  title="Manage"
                >
                  <i className="fa-solid fa-bars mx-2 "></i>
                </button>

                <SidebarManage
                  collapsed={collapsed}
                  setCollapsed={setCollapsed}
                  toggleSidebar={toggleSidebar}
                />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderApp;
