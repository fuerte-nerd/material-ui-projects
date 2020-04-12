import React from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography,
  Box,
} from "@material-ui/core";

const EditPlayer = () => {
  return (
    <Dialog open={true} fullWidth="sm">
      <DialogTitle>Edit Player</DialogTitle>
      <DialogContent>
        <Box pb={2}>
          <TextField label="Name" autoFocus fullWidth />
        </Box>
        <Box>
          <TextField label="Score" fullWidth type="number" defaultValue="0" />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditPlayer;
