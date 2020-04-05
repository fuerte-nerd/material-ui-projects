import React from "react";

import { Box } from "@material-ui/core";

import dummyData from "../dummyData";

const NoteListings = () => {
  return (
    <Box>
      {dummyData.map((i) => {
        return <h1>Hello</h1>;
      })}
    </Box>
  );
};

export default NoteListings;
