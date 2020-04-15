import React from "react";
import { connect } from "react-redux";

import { toggleDialog } from "../redux/actions";

import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = (props) => {
  const handleClick = () => {
    props.dispatch(toggleDialog("newGameDialog"));
  };
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography style={{ flex: 1 }}>Scoreboard</Typography>
          <Button color="inherit" edge="end" onClick={handleClick}>
            New
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default connect()(Header);
