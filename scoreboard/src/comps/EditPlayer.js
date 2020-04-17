import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggleDialog, updateGames } from "../redux/actions";
import Sorter from "./arraySorter";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";

const EditPlayer = (props) => {
  const [compState, setCompState] = useState({
    name: "",
    score: "0",
  });

  useEffect(() => {
    const game = props.games.reduce((acc, cv) => {
      return cv.id === props.playerLoaded.gameId ? cv : acc;
    });
    const player = game.players.reduce((acc, cv) => {
      return cv.id === props.playerLoaded.playerId ? cv : acc;
    });
    setCompState({
      ...compState,
      name: player.name,
      score: player.score,
    });
  }, [props.playerLoaded]);

  const handleChange = (e) => {
    const f = e.currentTarget;
    switch (f.id) {
      case "name":
        return setCompState({
          ...compState,
          name: f.value,
        });
      case "score":
        return setCompState({
          ...compState,
          score: f.value,
        });
      default:
        return;
    }
  };

  const handleBlur = (e) => {
    const f = e.currentTarget;
    switch (f.id) {
      case "score":
        if (!compState.score.toString().match(/^[1-9][0-9]?$/g)) {
          setCompState({ ...compState, score: "0" });
        }
        return;
      case "name":
        if (compState.name === "") {
          setCompState({ ...compState, name: "New player" });
        }
        return;
      default:
        return;
    }
  };

  const handleClick = (e) => {
    const f = e.currentTarget;
    switch (f.id) {
      case "cancel":
        return props.dispatch(toggleDialog("editPlayerDialog"));
      case "delete":
      case "update":
        const newGamesArr = props.games.map((i) => {
          if (i.id === props.playerLoaded.gameId) {
            return {
              ...i,
              players: i.players.map((player) => {
                if (player.id === props.playerLoaded.playerId) {
                  return {
                    ...player,
                    name: compState.name,
                    score: parseInt(compState.score),
                  };
                } else {
                  return player;
                }
              }),
            };
          } else {
            return i;
          }
        });
        Sorter(newGamesArr);
        props.dispatch(updateGames(newGamesArr));
        return props.dispatch(toggleDialog("editPlayerDialog"));
      default:
        return;
    }
  };

  return (
    <Dialog
      open={props.isOpen}
      onClose={() => props.dispatch(toggleDialog("editPlayerDialog"))}
      maxWidth="sm"
    >
      <DialogTitle>Edit Player</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={10}>
            <TextField
              id="name"
              label="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
              fullWidth
              value={compState.name}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="score"
              label="Score"
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              value={compState.score}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleClick} id="cancel">
          Cancel
        </Button>
        <Button color="secondary" onClick={handleClick} id="delete">
          Delete
        </Button>
        <Button color="primary" onClick={handleClick} id="update">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.editPlayerDialog,
  playerLoaded: state.playerLoadedInEdit,
  games: state.games,
});
export default connect(mapStateToProps)(EditPlayer);
