import React from "react";
import { connect } from "react-redux";
import { addNote, loadNote, toggleViewer } from "../redux/actions";
import newNoteConfig from "./newNoteConfig";
import NoteListing from "./NoteListing";
import { Box, Grid, Container, Typography, Button } from "@material-ui/core";

const NoteListings = (props) => {
  const handleClick = () => {
    const newNote = newNoteConfig();
    props.dispatch(addNote(newNote));
    props.dispatch(loadNote(newNote.id));
    props.dispatch(toggleViewer());
  };
  return (
    <Container>
      <Grid container spacing={4}>
        {props.notes && props.notes.length > 0 ? (
          props.notes.map((i) => {
            return <NoteListing key={i.id} data={i} />;
          })
        ) : (
          <Box align="center" width="1" p={5}>
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
