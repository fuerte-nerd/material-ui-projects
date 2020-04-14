import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core";

import { AddCircle, RemoveCircle } from "@material-ui/icons";

const NewGame = () => {
  return (
    <Dialog maxWidth="sm">
      <DialogTitle>Create New Scoreboard</DialogTitle>
      <DialogContent>
        <TextField label="Title" id="title" fullWidth margin="dense" />
        <TextField
          label="Description"
          id="description"
          fullWidth
          margin="normal"
        />

        <TextField
          label="No. of players"
          id="players"
          defaultValue={2}
          style={{ width: "9rem" }}
          margin="normal"
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <RemoveCircle />
                </IconButton>
                <IconButton>
                  <AddCircle />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button color="primary">Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGame;
