import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  IconButton,
  Box,
  InputAdornment,
} from "@material-ui/core";

import { AddCircle, RemoveCircle } from "@material-ui/icons";

const NewGame = () => {
  return (
    <Dialog maxWidth="sm" open>
      <DialogTitle>Create New Scoreboard</DialogTitle>
      <DialogContent>
        <TextField label="Title" id="title" fullWidth margin="normal" />
        <TextField
          label="Description"
          id="description"
          fullWidth
          margin="normal"
        />

        <TextField
          label="No. of players"
          id="players"
          margin="normal"
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <>
                <InputAdornment position="end">
                  <IconButton>
                    <RemoveCircle />
                  </IconButton>
                </InputAdornment>
                <InputAdornment position="end">
                  <IconButton>
                    <AddCircle />
                  </IconButton>
                </InputAdornment>
              </>
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
