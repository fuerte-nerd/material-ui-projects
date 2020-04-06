import React from "react";
import { Dialog, Container, Paper } from "@material-ui/core";

const NoteViewer = (props) => {
  return (
    <Dialog open={true} fullScreen>
      <Container>
        <Paper elevation={2}>Hello</Paper>
      </Container>
    </Dialog>
  );
};

export default NoteViewer;
