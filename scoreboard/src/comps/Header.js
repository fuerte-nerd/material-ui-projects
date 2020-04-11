import React from "react";

import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography style={{ flex: 1 }}>Scoreboard</Typography>
        <Button>New</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
