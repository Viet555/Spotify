import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavDropdown } from "react-bootstrap";
const SidebarManage = (props) => {
  const { collapsed, toggleSidebar } = props;
  return (
    <>
      <Sidebar
        collapsed={collapsed}
        toggled={!collapsed}
        breakPoint="all"
        onBackdropClick={toggleSidebar}
        backgroundColor="rgba(29, 29, 29, 0.7)"
        rootStyles={{
          color: "rgba(0, 176, 251, 0.7)",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        <Menu>
          <SubMenu
            icon={
              <i
                className="fa-solid fa-users"
                style={{ color: "rgba(0, 176, 251, 0.7)" }}
              ></i>
            }
            label="Manage Users"
          >
            <MenuItem component={<Link to="/manage-User" />}>
              CRUD Users
            </MenuItem>
            <MenuItem component={<Link to="/ManageMarkdown" />}>
              Manage Markdown
            </MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <i
                className="fa-solid fa-guitar"
                style={{ color: "rgba(0, 176, 251, 0.7)" }}
              ></i>
            }
            label="Manage Songs"
          >
            <MenuItem component={<Link to="/manage-songs" />}>
              CRUD Songs
            </MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <i
                className="fa-solid fa-list-ol"
                style={{ color: "rgba(0, 176, 251, 0.7)" }}
              ></i>
            }
            label="Manage playlist"
          >
            <MenuItem component={<Link to="/manage-playlist" />}>
              CRUD Playlist
            </MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <i
                className="fa-solid fa-music"
                style={{ color: "rgba(0, 176, 251, 0.7)" }}
              ></i>
            }
            label="Manage Artits"
          >
            <MenuItem component={<Link to="/Manage-Artist" />}>
              CRUD Artist
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};
export default SidebarManage;
