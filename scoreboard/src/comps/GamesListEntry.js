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
  Tooltip,
} from "@material-ui/core";

import { Alert } from "@material-ui/lab";

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
    for (let i of props.gameData.players) {
      console.log(i);
    }

    const leaders = props.gameData.players.reduce((acc, cv, ind) => {
      console.log(ind);
      if (ind === 0) {
        return [cv];
      }
      if (cv.score > acc[0].score) {
        return [cv];
      } else {
        if (cv.score === acc[0].score) {
          return acc.concat([cv]);
        }
      }
      return acc;
    });

    if (leaders.length > 2) {
      return leaders.reduce((acc, cv, currInd) => {
        if (currInd + 1 === leaders.length) {
          return props.gameData.in_progress
            ? `${acc} and ${cv.name} are winning`
            : `${acc} and ${cv.name} won`;
        } else if (currInd === 0) {
          return cv.name;
        } else {
          return `${acc}, ${cv.name}`;
        }
      });
    } else if (leaders.length === 2) {
      return props.gameData.in_progress
        ? `${leaders[0].name} and ${leaders[1].name} are winning`
        : `${leaders[0].name} and ${leaders[1].name} won`;
    } else if (leaders.length === props.gameData.players.length) {
      return props.gameData.in_progress ? `Nobody is winning` : `Nobody won`;
    } else {
      return props.gameData.in_progress
        ? `${leaders[0].name} is winning`
        : `${leaders[0].name} won`;
    }
  };

  return (
    <Card raised>
      <CardActionArea>
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
          <Alert
            variant="filled"
            icon={props.gameData.in_progress ? <LockOpen /> : <Lock />}
            color={props.gameData.in_progress ? "success" : "error"}
          >
            {props.gameData.in_progress
              ? `This game is in progress`
              : `This game has finished`}
          </Alert>
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
        <Button variant="outlined" color="primary">
          Open
        </Button>
        <Button variant="outlined" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default GamesListEntry;
