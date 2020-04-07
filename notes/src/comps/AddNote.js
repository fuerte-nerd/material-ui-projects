import React from "react";
import { toggleViewer, addNote } from "../redux/actions";
import { Fab } from "@material-ui/core";

import { Edit } from "@material-ui/icons";

const AddNote = (props) => {
  const handleClick = () => {
    props.dispatch(addNote());
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

export default AddNote;
