import React from "react";
import { connect } from "react-redux";
import { toggleAddTodoModal } from "../redux/actions";
import { Modal } from "@material-ui/core";

const AddTodo = (props) => {
  const handleClose = () => {
    props.dispatch(toggleAddTodoModal());
  };
  return (
    <Modal open={props.isOpen} onClose={handleClose}>
      <h1>Hello</h1>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.isAddToDoOpen,
});
export default connect(mapStateToProps)(AddTodo);
