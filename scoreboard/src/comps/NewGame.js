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

import { Add, Remove } from "@material-ui/icons";

const NewGame = () => {
  return (
    <Dialog maxWidth="sm" open>
      <DialogTitle>Create New Scoreboard</DialogTitle>
      <DialogContent>
        <TextField label="Title" id="title" fullWidth />
        <TextField label="Description" id="description" fullWidth />
        <Box display="inline" mt={2}>
          <Typography>2 Players</Typography>
        </Box>
        <IconButton>
          <Remove />
        </IconButton>
        <IconButton>
          <Add />
        </IconButton>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGame;
