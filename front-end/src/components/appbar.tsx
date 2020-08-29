import React, { useState } from "react";

import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

const AppBarTitle = styled(Typography)`
  padding: 5px;
`;

const Menu = styled.div`
  position: fixed;
  z-index: 2;
  background-color: grey;
  width: 10%;
  border-radius: 0px 0px 8px 8px;
`;

const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const MenuItem = styled.li`
  padding: 10px;
  &:hover {
    background-color: #637bff;
    color: white;
    border-radius: 0px 0px 8px 8px;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Appbar = () => {
  const [hideMenu, setHideMenu] = useState(true);

  const onMenuClick = () => {
    setHideMenu(!hideMenu);
  };

  return (
    <div id="AppBar">
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
          <AppBarTitle variant="h6">Weather App</AppBarTitle>
        </Toolbar>
      </AppBar>
      <Menu hidden={hideMenu}>
        <MenuList>
          <StyledLink to="/" onClick={onMenuClick}>
            <MenuItem>Weather</MenuItem>
          </StyledLink>
          <StyledLink to="/info" onClick={onMenuClick}>
            <MenuItem>Help</MenuItem>
          </StyledLink>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Appbar;
