import React from "react";

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";

import { CheckBoxOutlineBlank, CheckBox } from "@material-ui/icons";

const Todo = (props) => {
  const { title, create_date, done } = props.data;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{done ? <CheckBox /> : <CheckBoxOutlineBlank />}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={create_date} />
    </ListItem>
  );
};

export default Todo;
