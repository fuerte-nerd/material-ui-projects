import React from "react";
import { connect } from "react-redux";
import NoteListing from "./NoteListing";
import { Box, Grid, Container, Typography, Button } from "@material-ui/core";

import dummyData from "../dummyData";

const NoteListings = (props) => {
  return (
    <Container>
      {props.notes && props.notes.length > 1 ? (
        props.notes.map((i) => {
          return (
            <Grid container spacing={4}>
              <NoteListing id={i.id} />
            </Grid>
          );
        })
      ) : (
        <Box align="center" p={3}>
          <Typography>You don't have any notes yet...</Typography>
          <Box m={1}>
            <Button color="secondary" variant="contained">
              Add Note
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(NoteListings);
