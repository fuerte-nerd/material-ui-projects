import React, { useState } from "react";

import moment from "moment";

import {
  ListItem,
  ListItemIcon,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";

import { Delete } from "@material-ui/icons";

const Todo = (props) => {
  const { title, create_date, done } = props.data;

  return (
    <ListItem>
      <ListItemIcon>
        <CheckBox edge="start" />
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={moment(create_date).format("D MMMM YYYY")}
      />
    </ListItem>
  );
};

export default Todo;
