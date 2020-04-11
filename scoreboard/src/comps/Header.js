import React from "react";

import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography style={{ flex: 1 }}>Scoreboard</Typography>
          <Button color="inherit" edge="end">
            New
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
