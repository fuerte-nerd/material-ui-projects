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
} from "@material-ui/core";

import { AddCircle, RemoveCircle } from "@material-ui/icons";

const NewGame = () => {
  return (
    <Dialog maxWidth="sm" open>
      <DialogTitle>Create New Scoreboard</DialogTitle>
      <DialogContent>
        <TextField label="Title" id="title" fullWidth gutterBottom />
        <TextField
          label="Description"
          id="description"
          fullWidth
          gutterBottom
        />
        <Box mt={2} display="flex" alignItems="center">
          <Box display="inline-block" mr={2}>
            <Typography>2 Players</Typography>
          </Box>
          <IconButton>
            <RemoveCircle />
          </IconButton>
          <IconButton>
            <AddCircle />
          </IconButton>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGame;
