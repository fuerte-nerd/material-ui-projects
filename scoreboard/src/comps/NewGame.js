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
    <Dialog maxWidth="sm" open>
      <DialogTitle>Create New Scoreboard</DialogTitle>
      <DialogContent>
        <TextField label="Title" id="title" fullWidth />
        <TextField label="Description" id="description" fullWidth />
        <TextField label="No. of players" id="players" type="number" />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGame;
