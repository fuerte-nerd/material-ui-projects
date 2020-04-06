import React from "react";
import {
  Dialog,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { ArrowLeft } from "@material-ui/icons";

const NoteViewer = (props) => {
  return (
    <Dialog open={true} fullScreen>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit">
            <ArrowLeft />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container></Container>
    </Dialog>
  );
};

export default NoteViewer;
