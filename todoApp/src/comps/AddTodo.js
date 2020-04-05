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

import uniqId from "uniqid";

const AddTodo = (props) => {
  const [todoValue, updateTodoValue] = useState("");

  const handleChange = (e) => {
    updateTodoValue(e.target.value);
  };

  const listenForEnter = (e) => {
    return e.key === "Enter" && props.isOpen ? handleClick() : null;
  };

  const handleClick = () => {
    props.dispatch(
      addTodo({
        id: uniqId(),
        title: todoValue,
        create_date: new Date(),
        done: false,
        complete_date: null,
      })
    );
    updateTodoValue("");
    props.dispatch(toggleAddTodoDialog());
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
          value={todoValue}
          fullWidth
          onKeyUp={listenForEnter}
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
  todos: state.todos,
});
export default connect(mapStateToProps)(AddTodo);
