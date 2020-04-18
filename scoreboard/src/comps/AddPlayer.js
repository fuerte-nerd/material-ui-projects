import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleDialog, updateGames } from "../redux/actions";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";

import uniqId from "uniqid";

const AddPlayer = (props) => {
  const [compState, setCompState] = useState({
    name: "New Player",
    score: "0",
  });

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
        if (!compState.score.match(/^[1-9][0-9]?$/g)) {
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
    switch (e.currentTarget.id) {
      case "cancel":
        return props.dispatch(toggleDialog("addPlayerDialog"));
      case "add":
        const newPlayer = {
          id: uniqId(),
          name: compState.name,
          score: parseInt(compState.score),
        };

        let newGamesArr = props.games.map((i) => {
          if (props.gameLoaded.id === i.id) {
            let newPlayersArr = i.players
              .concat([newPlayer])
              .slice()
              .sort((a, b) => {
                return a.score < b.score ? 1 : -1;
              });
            return {
              ...i,
              players: newPlayersArr,
              date_modified: new Date(),
            };
          }
          return i;
        });
        props.dispatch(updateGames(newGamesArr));
        return props.dispatch(toggleDialog("addPlayerDialog"));
      default:
        return;
    }
  };

  return (
    <Dialog
      open={props.isOpen}
      onClose={() => props.dispatch(toggleDialog("addPlayerDialog"))}
      maxWidth="sm"
    >
      <DialogTitle>Add New Player</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={10}>
            <TextField
              id="name"
              label="Name"
              value={compState.name}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="score"
              label="Score"
              value={compState.score}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              style={{ WebkitAppearance: "none" }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleClick} id="cancel">
          Cancel
        </Button>
        <Button color="primary" onClick={handleClick} id="add">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
const mapStateToProps = (state) => ({
  isOpen: state.addPlayerDialog,
  games: state.games,
  gameLoaded: state.gameLoadedInViewer,
});
export default connect(mapStateToProps)(AddPlayer);
