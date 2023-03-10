import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Header position="static">
        <NavItems>
          <Tabs to="/">PLAYUSERDATA</Tabs>
          <Tabs to="/">Home</Tabs>
          <Tabs to="/users">Users</Tabs>
          <Tabs to="/addusers">Add User</Tabs>
        </NavItems>
      </Header>
    </div>
  );
};

export default Navbar;
const Header = styled(AppBar)`
  background: #330e62;
  width: 100%;
`;
const NavItems = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Tabs = styled(NavLink)`
  font-size: 1em;
  margin-right: 1em;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
`;
