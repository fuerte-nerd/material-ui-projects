import React from "react";
import NoteListing from "./NoteListing";
import { Grid, Container, Box } from "@material-ui/core";

import dummyData from "../dummyData";

const NoteListings = () => {
  return (
    <Container>
      <Grid container>
        <Box>
          {dummyData.map((i) => {
            return <NoteListing data={i} />;
          })}
        </Box>
      </Grid container>
    </Container>
  );
};

export default NoteListings;
