import React from "react";
import NoteListing from "./NoteListing";
import { Grid, Container, Box } from "@material-ui/core";

import dummyData from "../dummyData";

const NoteListings = () => {
  return (
    <Container>
      <Grid container>
        {dummyData.map((i) => {
          return <NoteListing data={i} />;
        })}
      </Grid>
    </Container>
  );
};

export default NoteListings;
