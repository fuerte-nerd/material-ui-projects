import React from "react";
import {
  Dialog,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ArrowBack, LockOpen, Lock, Delete } from "@material-ui/icons";

const NoteViewer = (props) => {
  return (
    <Dialog open={true} fullScreen>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <ArrowBack />
          </IconButton>
          <Typography style={{ flex: 1 }}>Note Viewer</Typography>
          <IconButton color="inherit">
            <LockOpen />
          </IconButton>
          <IconButton color="inherit" i edge="end">
            <Delete />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container></Container>
    </Dialog>
  );
};

export default NoteViewer;
