import React from "react";
import { connect } from "react-redux";
import { toggleDone, deleteTodo } from "../redux/actions";

import moment from "moment";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";

import { Delete } from "@material-ui/icons";

const Todo = (props) => {
  const thisTodo = props.todos.filter((i) => {
    if (i.id === props.data.id) {
      return i;
    }
    return null;
  })[0];

  const { id, title, create_date, done } = thisTodo;

  const handleDoneClick = () => {
    props.dispatch(toggleDone(id));
  };

  const handleDeleteClick = () => {
    props.dispatch(deleteTodo(id));
  };

  return (
    <ListItem divider button onClick={handleDoneClick}>
      <ListItemIcon>
        <Checkbox edge="start" checked={done} />
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={moment(create_date).format("D MMMM YYYY HH:mm")}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDeleteClick}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todo);
