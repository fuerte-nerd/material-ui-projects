import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleViewer, updateNote } from "../redux/actions";
import {
  Dialog,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { ArrowBack, LockOpen, Lock, Delete } from "@material-ui/icons";

import moment from "moment";

const NoteViewer = (props) => {
  const handleBackClick = () => {
    props.dispatch(toggleViewer());
  };

  const handleChange = (e) => {
    props.dispatch(
      updateNote({
        ...props.noteLoaded,
        [e.target.getAttribute("id")]: e.target.value,
      })
    );
  };

  return props.noteLoaded ? (
    <Dialog open={props.isOpen} fullScreen transitionDuration={500}>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleBackClick}>
            <ArrowBack />
          </IconButton>
          <Typography onClick={handleBackClick}>Back to main menu</Typography>
          <span style={{ flex: 1 }} />
          <IconButton color="inherit">
            <LockOpen />
          </IconButton>
          <IconButton color="inherit" i edge="end">
            <Delete />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "6rem" }}>
        <TextField
          fullWidth
          id="title"
          InputProps={{
            disableUnderline: true,
            style: { fontSize: "6rem", fontWeight: 300 },
          }}
          onChange={handleChange}
          value={props.noteLoaded.title}
        />
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {moment(props.noteLoaded.create_date).format("D MMM")}
        </Typography>
        <TextField
          fullWidth
          multiline
          id="body"
          value={props.noteLoaded.body}
          onChange={handleChange}
          InputProps={{
            disableUnderline: true,
            style: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 },
          }}
        />
      </Container>
    </Dialog>
  ) : null;
};
const mapStateToProps = (state) => ({
  isOpen: state.isViewerOpen,
  noteLoaded: state.noteLoaded,
});
export default connect(mapStateToProps)(NoteViewer);
