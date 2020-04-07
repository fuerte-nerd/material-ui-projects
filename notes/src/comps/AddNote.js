import React from "react";
import { connect } from "react-redux";
import { toggleViewer, addNote, loadNote } from "../redux/actions";
import { Fab } from "@material-ui/core";
import uniqId from "uniqid";
import { Edit } from "@material-ui/icons";

const AddNote = (props) => {
  const handleClick = () => {
    const newId = uniqId();
    props.dispatch(
      addNote({
        id: newId,
        title: "",
        body: "",
        create_date: new Date(),
        modified_date: new Date(),
        locked: false,
      })
    );
    props.dispatch(loadNote(newId));
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
