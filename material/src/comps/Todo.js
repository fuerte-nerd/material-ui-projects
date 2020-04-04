import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions";

import moment from "moment";

import {
  ListItem,
  ListItemIcon,
  Avatar,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";

import { Delete } from "@material-ui/icons";

const Todo = (props) => {
  const { id, title, create_date, done } = props.data;

  const handleDeleteClick = () => {
    props.dispatch(deleteTodo(id));
  };

  return (
    <ListItem divider onClick={() => console.log("clicked")}>
      <ListItemIcon>
        <Checkbox edge="start" />
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

export default connect()(Todo);
