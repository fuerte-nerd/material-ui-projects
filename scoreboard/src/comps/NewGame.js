import React from "react";
import { connect } from "react-redux";
import { toggleDialog } from "../redux/actions";
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

const NewGame = (props) => {
  const handleClick = (e) => {
    switch (e.currentTarget.id) {
      case "cancel":
        return props.dispatch(toggleDialog("newGameDialog"));
      case "create":
        return console.log("create clicked");
      default:
        return;
    }
  };

  return (
    <Dialog
      maxWidth="sm"
      open={props.newGameDialog}
      onClose={() => props.dispatch(toggleDialog("newGameDialog"))}
    >
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
        <Button id="cancel" onClick={handleClick}>
          Cancel
        </Button>
        <Button id="create" onClick={handleClick} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  newGameDialog: state.newGameDialog,
});
export default connect(mapStateToProps)(NewGame);
