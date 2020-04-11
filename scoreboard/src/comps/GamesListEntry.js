import React from "react";
import { ListItem, ListItemText, Typography } from "@material-ui/core";

import Data from "../Data";

const GamesListEntry = (props) => {
  return (
    <ListItem>
      <ListItemText>{props.gameData.title}</ListItemText>
    </ListItem>
  );
};

export default GamesListEntry;
