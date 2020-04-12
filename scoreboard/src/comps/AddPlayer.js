import React from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";

const AddPlayer = () => {
  return (
    <Dialog open={true} fullWidth="sm">
      <DialogTitle>Add New Player</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={10}>
            <TextField label="Name" autoFocus fullWidth />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField label="Score" fullWidth type="number" defaultValue="0" />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="inherit">Cancel</Button>
        <Button color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPlayer;
