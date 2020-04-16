import React from "react";
import {
  List,
  Divider,
  ListItem,
  Tooltip,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

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
          {moment().diff(moment(compState.date_created), "days") < 365
            ? moment(compState.date_created).format("Do MMMM")
            : moment(compState.date_created).format("Do MMMM YYYY")}
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
          {moment(compState.date_modified).fromNow()}
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
          {compState.players.length}
          {compState.players.length > 1 ? ` players` : ` player`}
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <Tooltip
          title={compState.in_progress ? `Current leader` : `Winner`}
          placement="left"
        >
          <ListItemIcon edge="start">
            <EmojiEvents />
          </ListItemIcon>
        </Tooltip>
        <ListItemText>{getLeader()}</ListItemText>
      </ListItem>
      <Divider />
    </List>
  );
};

export default GameSummary;
