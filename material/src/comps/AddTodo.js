import React from "react";
import { connect } from "react-redux";
import { toggleAddTodoDialog } from "../redux/actions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

const AddTodo = (props) => {
  const handleClose = () => {
    props.dispatch(toggleAddTodoDialog());
  };
  return (
    <Dialog open={props.isOpen} onClose={handleClose}>
      <DialogTitle>Hello</DialogTitle>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.isAddToDoOpen,
});
export default connect(mapStateToProps)(AddTodo);
