import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  Typography,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tooltip,
} from "@material-ui/core";

import {
  CalendarToday,
  Update,
  People,
  EmojiEvents,
  Lock,
  LockOpen,
} from "@material-ui/icons";

import moment from "moment";

const GamesListEntry = (props) => {
  const getLeader = () => {
    let leaders = [props.gameData.players[0]];

    for (let i = 1; i < props.gameData.players.length; i++) {
      if (props.gameData.players[i].score > leaders[0].score) {
        leaders = [props.gameData.players[i]];
      } else if (props.gameData.players[i].score === leaders[0].score) {
        leaders = leaders.concat([props.gameData.players[i]]);
      } else {
        continue;
      }
    }

    switch (leaders.length) {
      case 1:
        return props.gameData.in_progress
          ? `${leaders[0].name} is winning`
          : `${leaders[0].name} won`;
      case 2:
        return props.gameData.in_progress
          ? `${leaders[0].name} and ${leaders[1].name} are winning`
          : `${leaders[0].name} and ${leaders[1].name} won`;
      case 3:
        return props.gameData.in_progress
          ? `${leaders[0].name}, ${leaders[1].name} and ${leaders[2].name} are winning`
          : `${leaders[0].name}, ${leaders[1].name} and ${leaders[2].name} won`;
      case props.gameData.players.length:
        return props.gameData.in_progress ? `Nobody is winning` : `Nobody won`;
      default:
        return props.gameData.in_progress
          ? `The lead is tied ${leaders.length} ways`
          : `The game was tied ${leaders.length} ways`;
    }
  };

  const handleClick = (e) => {
    switch (e.currentTarget.id) {
      case "action-area":
      case "open":
        return console.log(`Action area or Open button clicked`);
      case "delete":
        return console.log(`Delete button clicked`);
      case "toggle-lock":
        return console.log(`Toggle lock button clicked`);
      default:
        return `Something else was clicked`;
    }
  };

  return (
    <Card raised>
      <CardActionArea onClick={handleClick} id="action-area">
        <CardContent>
          <Typography variant="h5" align="center">
            {props.gameData.title}
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            {props.gameData.description}
          </Typography>
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
                {moment().diff(moment(props.gameData.date_created), "days") <
                365
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
              <ListItemText>{getLeader()}</ListItemText>
            </ListItem>
            <Divider />
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          id="open"
          variant="outlined"
          color="primary"
          onClick={handleClick}
        >
          Open
        </Button>
        <Button
          id="delete"
          variant="outlined"
          color="secondary"
          onClick={handleClick}
        >
          Delete
        </Button>
        <span style={{ flex: 1 }} />
        <Tooltip
          title={props.gameData.in_progress ? `Finish game` : `Resume game`}
          placement="left"
          arrow
        >
          <IconButton id="toggle-lock" onClick={handleClick}>
            {props.gameData.in_progress ? <LockOpen /> : <Lock />}
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default GamesListEntry;
