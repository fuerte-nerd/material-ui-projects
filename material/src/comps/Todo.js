import React from "react";

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";

const Todo = (props) => {
  console.log(props);
  return (
    <ListItem>
      <h1>I am a todo</h1>
    </ListItem>
  );
};

export default Todo;
