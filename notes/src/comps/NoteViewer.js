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
