import React, { useState, useEffect } from "react";
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
import newNoteConfig from "./newNoteConfig";
import moment from "moment";

const NoteViewer = (props) => {
  const [fieldValues, setFieldValues] = useState({
    title: "",
    body: "",
    locked: false,
  });

  // const [currentNoteState, setCurrentNoteState] = useState(newNoteConfig());

  const handleBackClick = () => {
    // if title and body have changed, dispatch modified_date first
    saveCheck();
    props.dispatch(toggleViewer());
  };

  const saveCheck = () => {
    if (
      props.noteLoaded.title !== fieldValues.title ||
      props.noteLoaded.body !== fieldValues.body ||
      props.noteLoaded.locked !== fieldValues.locked
    ) {
      props.dispatch(
        updateNote({
          ...props.noteLoaded,
          title: fieldValues.title,
          body: fieldValues.body,
          locked: fieldValues.locked,
          modified_date: new Date(),
        })
      );
    }
  };
  useEffect(() => {
    if (props.isOpen && props.autosave) {
      setInterval(() => {
        console.log("reached");
        saveCheck();
      }, props.autosave_interval);
    }
  }, [props.isOpen]);

  const handleChange = (e) => {
    setFieldValues({
      ...fieldValues,
      [e.target.getAttribute("id")]: e.target.value,
    });
    //const currentNote = props.notes.filter((i) => {
    //  return props.noteLoaded.id === i.id ? i : null;
    //})[0];

    //const fieldChanged = e.target.getAttribute("id");

    //if (!currentNote.locked) {
    //  props.dispatch(
    //    updateNote({
    //      ...currentNote,
    //      [fieldChanged]: fieldValues.fieldChanged,
    //   })
    // );
    // }
  };

  useEffect(() => {
    if (props.noteLoaded) {
      setFieldValues({
        title: props.noteLoaded.title,
        body: props.noteLoaded.body,
        locked: props.noteLoaded.locked,
      });
    }
  }, [props.noteLoaded]);

  const handleDeleteClick = () => {
    const idToDelete = props.noteLoaded.id;
    props.dispatch(toggleViewer());
    props.dispatch(loadNote(null));
    props.dispatch(deleteNote(idToDelete));
  };

  const handleLockClick = () => {
    setFieldValues({
      ...fieldValues,
      locked: !fieldValues.locked,
    });
  };

  useEffect(() => {
    if (!props.isOpen && props.noteLoaded) {
      const currentId = props.noteLoaded.id;
      props.dispatch(loadNote(null));
      if (fieldValues.title.length === 0 && fieldValues.body.length === 0) {
        props.dispatch(deleteNote(currentId));
      }
    }
    // eslint-disable-next-line
  }, [props.isOpen]);

  //  useEffect(() => {
  //if (props.noteLoaded) {
  //  setCurrentNoteState(
  //    props.notes.filter((i) => {
  //      return props.noteLoaded.id === i.id ? i : null;
  //    })[0]
  //  );
  //}
  // eslint-disable-next-line
  //}, [props.notes, props.isOpen]);

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
            {fieldValues.locked ? <Lock /> : <LockOpen />}
          </IconButton>
          <IconButton color="inherit" onClick={handleDeleteClick} edge="end">
            <Delete />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "6rem" }}>
        <TextField
          fullWidth
          multiline
          placeholder="Title"
          id="title"
          defaultValue={props.noteLoaded.title}
          autoFocus={props.noteLoaded.title.length === 0 ? true : false}
          InputProps={{
            disableUnderline: fieldValues.title.length === 0 ? false : true,
            style: { fontSize: "3rem", fontWeight: 300 },
          }}
          onChange={handleChange}
          value={fieldValues.title}
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
          placeholder="Write your note here..."
          id="body"
          defaultValue={props.noteLoaded.body}
          value={fieldValues.body}
          onChange={handleChange}
          InputProps={{
            disableUnderline: fieldValues.body.length === 0 ? false : true,
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
  autosave: state.autosave,
  autosave_interval: state.autosave_interval,
});
export default connect(mapStateToProps)(NoteViewer);
