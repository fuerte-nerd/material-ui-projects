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
  Typography,
} from "@material-ui/core";

import { Delete } from "@material-ui/icons";

const Todo = (props) => {
  const thisTodo = props.todos.filter((i) => {
    if (i.id === props.data.id) {
      return i;
    }
    return null;
  })[0];

  const { id, title, create_date, complete_date, done } = thisTodo;

  const handleDoneClick = () => {
    props.dispatch(toggleDone(id));
  };

  const handleDeleteClick = () => {
    props.dispatch(deleteTodo(id));
  };

  return (
    <ListItem
      border={1}
      button
      onClick={handleDoneClick}
      style={done ? doneStyle : null}
    >
      <ListItemIcon>
        <Checkbox edge="start" checked={done} />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary=<Typography
          variant="body1"
          style={done ? { textDecoration: "line-through" } : null}
        >
          {title}
        </Typography>
        secondary=<Typography variant="body2" color="textSecondary">
          <span style={{ display: "block" }}>
            <strong>CREATED: </strong>
            {moment(create_date).format("D MMMM YYYY HH:mm")}
          </span>
          <strong>COMPLETED: </strong>
          {done ? moment(complete_date).format("D MMMM YYYY HH:mm") : "?"}
        </Typography>
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDeleteClick}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const doneStyle = {
  backgroundColor: "silver",
  color: "dark-gray",
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todo);
