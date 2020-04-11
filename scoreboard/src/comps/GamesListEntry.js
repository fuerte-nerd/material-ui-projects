import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";

import Data from "../Data";

const GamesListEntry = (props) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="h4">{props.gameData.title}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default GamesListEntry;
