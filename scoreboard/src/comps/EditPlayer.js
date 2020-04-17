import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggleDialog } from "../redux/actions";

import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";

const EditPlayer = (props) => {
  const [compState, setCompState] = useState({
    name: "",
    score: 0,
  });

  useEffect(() => {}, [props.isOpen]);

  const handleClick = (e) => {
    const f = e.currentTarget;
    switch (f.id) {
      case "cancel":
        props.dispatch(toggleDialog("editPlayerDialog"));
      case "delete":
      case "update":
      default:
        return;
    }
  };

  return (
    <Dialog
      open={props.isOpen}
      onClose={() => props.dispatch(toggleDialog("editPlayerDialog"))}
      maxWidth="sm"
    >
      <DialogTitle>Edit Player</DialogTitle>
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
        <Button color="secondary">Delete</Button>
        <Button color="primary">Update</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.editPlayerDialog,
});
export default connect(mapStateToProps)(EditPlayer);
