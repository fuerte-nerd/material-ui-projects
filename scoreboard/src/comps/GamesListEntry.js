import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";

import Data from "../Data";

const GamesListEntry = (props) => {
  return (
    <Card elevation={4}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h4">{props.gameData.title}</Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {props.gameData.description}
          </Typography>
          <Divider />
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default GamesListEntry;
