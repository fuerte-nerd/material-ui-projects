import React from "react";
import { connect } from "react-redux";
import { Modal } from "@material-ui/core";

const AddTodo = (props) => {
  return <Modal open={props.isOpen}>Hello</Modal>;
};

const mapStateToProps = (state) => ({
  isOpen: state.isAddToDoOpen,
});
export default connect(mapStateToProps)(AddTodo);
