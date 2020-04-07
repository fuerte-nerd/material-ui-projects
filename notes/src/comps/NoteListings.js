import React from "react";
import { connect } from "react-redux";
import NoteListing from "./NoteListing";
import { Grid, Container, Typography } from "@material-ui/core";

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
        <Typography p={6} align="center" border={1}>
          You don't have any notes yet...
        </Typography>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(NoteListings);
