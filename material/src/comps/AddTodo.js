import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleAddTodoDialog, addTodo } from "../redux/actions";
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
  const [todoValue, updateTodoValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    props.dispatch(updateTodoValue(e.target.value));
  };
  const handleClick = () => {
    console.log("");
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
          onChange={handleChange}
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
