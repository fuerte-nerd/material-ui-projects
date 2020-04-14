import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import { Add, Remove } from "@material-ui/icons";

const NewGame = () => {
  return (
    <Dialog maxWidth="sm" open>
      <DialogTitle>Create New Scoreboard</DialogTitle>
      <DialogContent>
        <TextField label="Title" id="title" fullWidth />
        <TextField label="Description" id="description" fullWidth />
        <TextField
          label="No. of players"
          id="players"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Remove />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGame;
