import React from "react";
import NoteListing from "./NoteListing";
import { Box } from "@material-ui/core";

import dummyData from "../dummyData";

const NoteListings = () => {
  return (
    <Box>
      {dummyData.map((i) => {
        return <NoteListing data={i} />;
      })}
    </Box>
  );
};

export default NoteListings;
