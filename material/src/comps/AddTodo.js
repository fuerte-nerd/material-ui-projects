import React from "react";
import { connect } from "react-redux";
import { toggleAddTodoDialog } from "../redux/actions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  DialogActions,
} from "@material-ui/core";

const AddTodo = (props) => {
  const handleClick = () => {
    console.log("clicked");
  };

  const handleClose = () => {
    props.dispatch(toggleAddTodoDialog());
  };
  return (
    <Dialog open={props.isOpen} onClose={handleClose}>
      <DialogTitle>Add Todo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new 'Todo', enter a title in the field below and click 'ADD'.
        </DialogContentText>
        <TextField
          autoFocus
          id="title"
          label="Description"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleClick}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.isAddToDoOpen,
});
export default connect(mapStateToProps)(AddTodo);
