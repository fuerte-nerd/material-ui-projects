import React from "react";
import { Fab } from "@material-ui/core";

import { Edit } from "@material-ui/icons";

const AddNote = () => {
  return (
    <Fab
      color="secondary"
      style={{
        position: "fixed",
        right: "3rem",
        bottom: "3rem",
      }}
    >
      <Edit />
    </Fab>
  );
};

export default AddNote;
