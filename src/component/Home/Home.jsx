import { useState } from "react";
import "./Home.scss";
import PlayList from "./YourLibary/PlayList";
import YourLibary from "./YourLibary/YourLibay";
import { Outlet, useLocation } from "react-router-dom";
const Home = () => {
  const [showRightNav, setShowRightNav] = useState(false);
  const location = useLocation();
  return (
    <>
      <div className="container-Home">
        <div className="content-home-left">
          <YourLibary />
          <PlayList />
        </div>
        <div
          className={`content-home-center ${
            showRightNav ? "with-right-nav" : ""
          }`}
        >
          <Outlet />
        </div>
        {showRightNav && <div className="content-home-right">123</div>}
      </div>
    </>
  );
};
export default Home;
