import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

import { CalendarToday } from "@material-ui/icons";

import moment from "moment";

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
          <List>
            <Divider />
            <ListItem>
              <ListItemIcon edge="start">
                <CalendarToday />
              </ListItemIcon>
              <ListItemText>
                {moment(props.gameData.create_date).format("D MMM YYYY")}
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default GamesListEntry;
