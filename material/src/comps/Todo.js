import React, { useState } from "react";

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
  const { title, create_date, done } = props.data;

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox edge="start" />
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={moment(create_date).format("D MMMM YYYY")}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
