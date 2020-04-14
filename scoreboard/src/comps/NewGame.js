import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
} from "@material-ui/core";

const NewGame = () => {
  return (
    <Dialog maxWidth="md" open>
      <DialogTitle>Hello</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <TextField label="Title" id="title" fullWidth />
          </Grid>
          <Grid item xs={12} md={9}>
            <TextField label="Description" id="description" />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField label="No. of players" id="players" />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGame;
