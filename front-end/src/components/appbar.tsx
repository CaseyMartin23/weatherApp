import React, { useState } from "react";

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
  padding: 20px;
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
      <Menu hidden={hideMenu}>sdopvnsdpivn0</Menu>
    </div>
  );
};

export default Appbar;
