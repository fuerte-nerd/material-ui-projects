import React from "react";
import { connect } from "react-redux";
import { addNote, loadNote, toggleViewer } from "../redux/actions";
import NoteListing from "./NoteListing";
import { Box, Grid, Container, Typography, Button } from "@material-ui/core";

import uniqId from "uniqid";

import dummyData from "../dummyData";

const NoteListings = (props) => {
  const handleClick = () => {
    const newId = uniqId();
    props.dispatch(
      addNote({
        id: newId,
        title: "",
        body: "",
        locked: false,
        create_date: new Date(),
        modified_date: new Date(),
      })
    );
    props.dispatch(loadNote(newId));
    props.dispatch(toggleViewer());
  };
  return (
    <Container>
      <Grid container spacing={4}>
        {props.notes && props.notes.length > 0 ? (
          props.notes.map((i) => {
            return <NoteListing data={i} />;
          })
        ) : (
          <Box align="center" p={5}>
            <Typography>You don't have any notes yet...</Typography>
            <Box m={1}>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleClick}
              >
                Add Note
              </Button>
            </Box>
          </Box>
        )}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(NoteListings);
