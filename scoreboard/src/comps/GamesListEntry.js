import React from "react";
import { connect } from "react-redux";
import { loadGame, updateGames, toggleDialog } from "../redux/actions";

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

import { CalendarToday, Update, People, EmojiEvents } from "@material-ui/icons";

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
      case props.gameData.players.length:
        return props.gameData.in_progress ? `Nobody is winning` : `Nobody won`;
      case 2:
        return props.gameData.in_progress
          ? `${leaders[0].name} and ${leaders[1].name} are winning`
          : `${leaders[0].name} and ${leaders[1].name} won`;
      case 3:
        return props.gameData.in_progress
          ? `${leaders[0].name}, ${leaders[1].name} and ${leaders[2].name} are winning`
          : `${leaders[0].name}, ${leaders[1].name} and ${leaders[2].name} won`;
      default:
        return props.gameData.in_progress
          ? `The lead is tied ${leaders.length} ways`
          : `The game was tied ${leaders.length} ways`;
    }
  };

  const handleClick = (e) => {
    let newGamesArr;
    switch (e.currentTarget.id) {
      case "action-area":
      case "open":
        props.dispatch(loadGame(props.gameData));
        return props.dispatch(toggleDialog("viewerDialog"));
      case "delete":
        newGamesArr = props.games.filter((i) => {
          return i.id === props.gameData.id ? null : i;
        });
        return props.dispatch(updateGames(newGamesArr));
      case "toggle-lock":
        newGamesArr = props.games.map((i) => {
          if (i.id === props.gameData.id) {
            return {
              ...i,
              in_progress: !i.in_progress,
              date_modified: new Date(),
            };
          }
          return i;
        });
        return props.dispatch(updateGames(newGamesArr));
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
          <Button
            id="toggle-lock"
            variant={props.gameData.in_progress ? "outlined" : "contained"}
            onClick={handleClick}
          >
            {props.gameData.in_progress ? `In progress` : `Finished`}
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  games: state.games,
});
export default connect(mapStateToProps)(GamesListEntry);
