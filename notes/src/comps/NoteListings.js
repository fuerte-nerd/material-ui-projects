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
        <Box align="center" p={5} border={1} borderColor="secondaryMain">
          <Typography>You don't have any notes yet...</Typography>
          <Button>Add Note</Button>
        </Box>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(NoteListings);
