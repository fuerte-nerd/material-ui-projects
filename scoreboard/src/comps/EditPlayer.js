import React from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

const EditPlayer = () => {
  return (
    <Dialog open={true}>
      <DialogTitle>Edit Player</DialogTitle>
      <DialogContent>
        <TextField />
        <TextField type="number" />
      </DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
      <Typography>Hello</Typography>
    </Dialog>
  );
};

export default EditPlayer;
