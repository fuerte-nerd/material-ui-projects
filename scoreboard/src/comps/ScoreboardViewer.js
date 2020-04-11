import React from "react";

import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
} from "@material-ui/core";
const ScoreboardViewer = (props) => {
  return (
    <Dialog fullScreen open={true}>
      <AppBar>
        <Toolbar>
          <Typography style={{ flex: 1 }}>Scoreboard</Typography>
          <Button color="inherit" edge="end">
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box mt={3}>
        <TextField placeholder="Title" />
        <Typography>hello</Typography>
      </Box>
    </Dialog>
  );
};

export default ScoreboardViewer;
