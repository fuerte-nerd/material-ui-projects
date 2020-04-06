import React from "react";
import {
  Dialog,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ArrowLeft } from "@material-ui/icons";

const NoteViewer = (props) => {
  return (
    <Dialog open={true} fullScreen>
      <AppBar>
        <Toolbar>
          <IconButton>
            <ArrowLeft />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container></Container>
    </Dialog>
  );
};

export default NoteViewer;
