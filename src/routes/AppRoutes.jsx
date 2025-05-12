import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home.jsx";
import DashboardCenter from "../component/CenterView/DashboardCenter.jsx";
import Login from "../component/Login/Login.jsx";
import Register from "../component/Login/Register.jsx";
import DetailPlaylist from "../component/CenterView/DetailPlaylist/DetailPlaylist.jsx";
import ManageUser from "../component/Admin/ManageUser/ManageUser.jsx";
import ManageArtist from "../component/Admin/ManageArtist/ManageArtist.jsx";
import ManageSongs from "../component/Admin/ManageSongs/ManageSongs.jsx";
import ManagePlaylist from "../component/Admin/ManagePlaylist/ManagePlaylist.jsx";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<DashboardCenter />} />
          <Route path="detail-playlist/:id" element={<DetailPlaylist />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Manage-User" element={<ManageUser />} />
        <Route path="/Manage-Artist" element={<ManageArtist />} />
        <Route path="/manage-songs" element={<ManageSongs />} />
        <Route path="/manage-playlist" element={<ManagePlaylist />} />
      </Routes>
    </>
  );
};
export default AppRoute;
