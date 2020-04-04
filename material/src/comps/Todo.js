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
  console.log(props);
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{props.done ? <CheckBox /> : <CheckBoxOutlineBlank />}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.title} />
    </ListItem>
  );
};

export default Todo;
