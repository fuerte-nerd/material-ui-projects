import React from "react";
import {
  Dialog,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ArrowBack, Delete } from "@material-ui/icons";

const NoteViewer = (props) => {
  return (
    <Dialog open={true} fullScreen>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <ArrowBack />
          </IconButton>
          <Typography variant="h3">Note Viewer</Typography>
          <IconButton color="inherit">
            <Delete />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container></Container>
    </Dialog>
  );
};

export default NoteViewer;
