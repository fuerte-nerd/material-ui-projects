import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggleDialog } from "../redux/actions";

import { Scoreboard, EditPlayer } from "../Components";

import {
  Paper,
  Icon,
  IconButton,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Container,
  Grid,
  Divider,
  ListItem,
  Tooltip,
  ListItemIcon,
  ListItemText,
  List,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@material-ui/core";

import { Alert } from "@material-ui/lab";

import {
  Update,
  People,
  EmojiEvents,
  CalendarToday,
  Lock,
  LockOpen,
  AddCircle,
  RemoveCircle,
} from "@material-ui/icons";

import moment from "moment";

import TempData from "../Data";
import newGameState from "./newGameState";

const ScoreboardViewer = (props) => {
  const [compState, setCompState] = useState(newGameState);

  const {
    title,
    date_created,
    date_modified,
    description,
    players,
    in_progress,
  } = TempData[0];

  useEffect(() => {
    setCompState(props.gameLoaded);
  }, [props.gameLoaded]);

  const leader = () => {
    if (typeof compState.players === "object") {
      return compState.players.reduce((acc, cv) => {
        return cv.score > acc.score ? cv : acc;
      }, players[0]);
    }
  };

  const getLeader = () => {
    if (typeof compState.players === "object") {
      let leaders = [compState.players[0]];

      for (let i = 1; i < compState.players.length; i++) {
        if (compState.players[i].score > leaders[0].score) {
          leaders = [compState.players[i]];
        } else if (compState.players[i].score === leaders[0].score) {
          leaders = leaders.concat([compState.players[i]]);
        } else {
          continue;
        }
      }

      switch (leaders.length) {
        case 1:
          return compState.in_progress
            ? `${leaders[0].name} is winning`
            : `${leaders[0].name} won`;
        case compState.players.length:
          return compState.in_progress ? `Nobody is winning` : `Nobody won`;
        case 2:
          return compState.in_progress
            ? `${leaders[0].name} and ${leaders[1].name} are winning`
            : `${leaders[0].name} and ${leaders[1].name} won`;
        case 3:
          return compState.in_progress
            ? `${leaders[0].name}, ${leaders[1].name} and ${leaders[2].name} are winning`
            : `${leaders[0].name}, ${leaders[1].name} and ${leaders[2].name} won`;
        default:
          return compState.in_progress
            ? `The lead is tied ${leaders.length} ways`
            : `The game was tied ${leaders.length} ways`;
      }
    }
  };

  const handleClick = (e) => {
    switch (e.currentTarget.id) {
      case "back":
        // TODO: save data first
        props.dispatch(toggleDialog("viewerDialog"));
    }
  };

  return (
    <Dialog fullScreen open={props.isOpen}>
      <AppBar>
        <Toolbar>
          <Typography style={{ flex: 1 }}>Scoreboard</Typography>
          <Button color="inherit" edge="end" onClick={handleClick} id="back">
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <EditPlayer />
      <Box mt={3}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box>
                <TextField
                  fullWidth
                  multiline
                  InputProps={{
                    style: { fontSize: "4rem" },
                    disableUnderline: true,
                  }}
                  placeholder="Title"
                  defaultValue={compState.title}
                />
              </Box>
              <Box mt={1}>
                <TextField
                  fullWidth
                  defaultValue={compState.description}
                  multiline
                  InputProps={{ disableUnderline: true }}
                  placeholder="Description"
                />
              </Box>
              <Alert
                variant="filled"
                icon={compState.in_progress ? <LockOpen /> : <Lock />}
                color={compState.in_progress ? "success" : "error"}
              >
                {compState.in_progress
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
            </Grid>
            <Grid item xs={12} md={7}>
              <Scoreboard players={compState.players} />
              <Box
                align="center"
                display="flex"
                justifyContent="space-between"
                mt={2}
              >
                <Button color="primary">Add new player</Button>

                {compState.in_progress ? (
                  <Button color="secondary">Finish Game</Button>
                ) : (
                  <Button color="secondary">Resume Game</Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Dialog>
  );
};
const mapStateToProps = (state) => ({
  isOpen: state.viewerDialog,
  gameLoaded: state.gameLoadedInViewer,
});
export default connect(mapStateToProps)(ScoreboardViewer);
