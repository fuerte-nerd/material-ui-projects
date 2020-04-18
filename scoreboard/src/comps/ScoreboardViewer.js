import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggleDialog, updateGames } from "../redux/actions";

import { GameSummary, Scoreboard, EditPlayer, AddPlayer } from "../Components";

import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Container,
  Grid,
} from "@material-ui/core";

import { Alert } from "@material-ui/lab";

import { Lock, LockOpen } from "@material-ui/icons";

import newGameState from "./newGameState";

const ScoreboardViewer = (props) => {
  const [compState, setCompState] = useState(newGameState);

  useEffect(() => {
    setCompState(props.gameLoaded);
  }, [props.gameLoaded]);

  useEffect(() => {
    if (props.games.length > 0) {
      setCompState(
        props.games.reduce((acc, cv) => {
          if (cv.id === props.gameLoaded.id) {
            return cv;
          } else {
            return acc;
          }
        })
      );
    }
  }, [props.games]);

  const handleChange = (e) => {
    const f = e.currentTarget;
    setCompState({
      ...compState,
      [f.id]: f.value,
    });
  };

  const handleClick = (e) => {
    let newGameArr;
    switch (e.currentTarget.id) {
      case "back":
        // TODO: save data first
        //
        //
        console.log(props.gameLoaded.title);
        console.log(compState.title);
        if (
          props.gameLoaded.title !== compState.title ||
          props.gameLoaded.description !== compState.description
        ) {
          console.log("reached");
          newGameArr = props.games.map((i) => {
            if (i.id === props.gameLoaded.id) {
              return {
                ...i,
                title: compState.title,
                description: compState.description,
              };
            } else {
              return i;
            }
          });
          props.dispatch(updateGames(newGameArr));
        }
        return props.dispatch(toggleDialog("viewerDialog"));
      case "add-player":
        return props.dispatch(toggleDialog("addPlayerDialog"));
      case "resume-game":
      case "finish-game":
        newGameArr = props.games.map((i) => {
          if (i.id === props.gameLoaded.id) {
            return {
              ...i,
              in_progress: !i.in_progress,
              date_modified: new Date(),
            };
          }
          return i;
        });
        return props.dispatch(updateGames(newGameArr));
      default:
        return;
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
      <AddPlayer />
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
              <GameSummary gameData={compState} />
              <Box
                align="center"
                display="flex"
                justifyContent="space-between"
                mt={2}
              >
                <Button color="primary" onClick={handleClick} id="add-player">
                  Add new player
                </Button>

                {compState.in_progress ? (
                  <Button
                    color="secondary"
                    onClick={handleClick}
                    id="finish-game"
                  >
                    Finish Game
                  </Button>
                ) : (
                  <Button
                    color="secondary"
                    onClick={handleClick}
                    id="resume-game"
                  >
                    Resume Game
                  </Button>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Scoreboard gameData={compState} />
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
  games: state.games,
});
export default connect(mapStateToProps)(ScoreboardViewer);
