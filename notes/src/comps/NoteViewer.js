import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  toggleViewer,
  updateNote,
  deleteNote,
  loadNote,
} from "../redux/actions";
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
    const currentNote = props.notes.filter((i) => {
      return props.noteLoaded.id === i.id ? i : null;
    })[0];

    if (!currentNote.locked) {
      props.dispatch(
        updateNote({
          ...currentNote,
          [e.target.getAttribute("id")]: e.target.value,
        })
      );
    }
  };

  const handleDeleteClick = () => {
    const idToDelete = props.noteLoaded.id;
    props.dispatch(toggleViewer());
    props.dispatch(loadNote(null));
    props.dispatch(deleteNote(idToDelete));
  };

  const handleLockClick = () => {
    const currentNote = props.notes.filter((i) => {
      return props.noteLoaded.id === i.id ? i : null;
    })[0];
    props.dispatch(
      updateNote({
        ...currentNote,
        locked: !currentNote.locked,
      })
    );
  };

  useEffect(() => {
    if (!props.isOpen && props.noteLoaded) {
      const currentId = props.noteLoaded.id;
      props.dispatch(loadNote(null));
      const currentNote = props.notes.filter((i) => {
        return currentId === i.id ? i : null;
      })[0];
      if (currentNote.title.length === 0 && currentNote.body.length === 0) {
        props.dispatch(deleteNote(currentId));
      }
    }
  }, [props.isOpen]);

  return props.noteLoaded ? (
    <Dialog open={props.isOpen} fullScreen transitionDuration={500}>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleBackClick}>
            <ArrowBack />
          </IconButton>
          <Typography onClick={handleBackClick}>Back to main menu</Typography>
          <span style={{ flex: 1 }} />
          <IconButton color="inherit" onClick={handleLockClick}>
            {props.notes.filter((i) => {
              return i.id === props.noteLoaded.id ? i : null;
            })[0].locked ? (
              <Lock />
            ) : (
              <LockOpen />
            )}
          </IconButton>
          <IconButton color="inherit" onClick={handleDeleteClick} edge="end">
            <Delete />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "6rem" }}>
        <TextField
          fullWidth
          id="title"
          InputProps={{
            disableUnderline:
              props.notes.filter((i) => {
                return i.id === props.noteLoaded.id ? i : null;
              })[0].title.length === 0
                ? false
                : true,
            style: { fontSize: "6rem", fontWeight: 300 },
          }}
          onChange={handleChange}
          value={
            props.notes.filter((i) => {
              return i.id === props.noteLoaded.id ? i : null;
            })[0].title
          }
        />
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {`${moment(props.noteLoaded.create_date).format("D MMMM")} ${
            new Date(props.noteLoaded.create_date).getFullYear() ===
            new Date().getFullYear()
              ? ""
              : props.noteLoaded.create_date.getFullYear()
          } ${moment(props.noteLoaded.create_date).format("HH:mm")}`}
        </Typography>
        <TextField
          fullWidth
          multiline
          id="body"
          value={
            props.notes.filter((i) => {
              return i.id === props.noteLoaded.id ? i : null;
            })[0].body
          }
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
  notes: state.notes,
});
export default connect(mapStateToProps)(NoteViewer);
