import React from "react";
import NoteListing from "./NoteListing";
import { Container, Box } from "@material-ui/core";

import dummyData from "../dummyData";

const NoteListings = () => {
  return (
    <Container>
      <Box>
        {dummyData.map((i) => {
          return <NoteListing data={i} />;
        })}
      </Box>
    </Container>
  );
};

export default NoteListings;
