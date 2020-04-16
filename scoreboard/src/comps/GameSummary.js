import React from "react";
import {
  List,
  Divider,
  ListItem,
  Tooltip,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { CalendarToday, Update, People, EmojiEvents } from "@material-ui/icons";

import moment from "moment";
import getLeader from "./getLeader";

const GameSummary = (props) => {
  return (
    <List>
      <Divider />
      <ListItem>
        <Tooltip title="Date created" placement="left">
          <ListItemIcon edge="start">
            <CalendarToday />
          </ListItemIcon>
        </Tooltip>
        <ListItemText>
          {`Created on `}
          {moment().diff(moment(props.gameData.date_created), "days") < 365
            ? moment(props.gameData.date_created).format("Do MMMM")
            : moment(props.gameData.date_created).format("Do MMMM YYYY")}
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <Tooltip title="Last update" placement="left">
          <ListItemIcon edge="start">
            <Update />
          </ListItemIcon>
        </Tooltip>
        <ListItemText>
          {`Updated `}
          {moment(props.gameData.date_modified).fromNow()}
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <Tooltip title="Number of players" placement="left">
          <ListItemIcon edge="start">
            <People />
          </ListItemIcon>
        </Tooltip>
        <ListItemText>
          {props.gameData.players.length}
          {props.gameData.players.length > 1 ? ` players` : ` player`}
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <Tooltip
          title={props.gameData.in_progress ? `Current leader` : `Winner`}
          placement="left"
        >
          <ListItemIcon edge="start">
            <EmojiEvents />
          </ListItemIcon>
        </Tooltip>
        <ListItemText>
          {getLeader(props.gameData.players, props.gameData.in_progress)}
        </ListItemText>
      </ListItem>
      <Divider />
    </List>
  );
};

export default GameSummary;
