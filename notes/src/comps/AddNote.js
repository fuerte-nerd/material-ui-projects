import React from "react";
import { connect } from "react-redux";
import { toggleViewer, addNote, loadNote } from "../redux/actions";
import newNoteConfig from "./newNoteConfig";
import { Fab } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const AddNote = (props) => {
  const handleClick = () => {
    const newNote = newNoteConfig();
    props.dispatch(addNote(newNote));
    props.dispatch(loadNote(newNote.id));
    props.dispatch(toggleViewer());
  };

  return (
    <Fab
      color="secondary"
      style={{
        position: "fixed",
        right: "3rem",
        bottom: "3rem",
      }}
      onClick={handleClick}
    >
      <Edit />
    </Fab>
  );
};

export default connect()(AddNote);
