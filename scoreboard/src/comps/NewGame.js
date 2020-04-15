import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleDialog, createGame } from "../redux/actions";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core";

import uniqId from "uniqid";

import { AddCircle, RemoveCircle } from "@material-ui/icons";

const NewGame = (props) => {
  const [compState, setCompState] = useState({
    id: uniqId(),
    title: "",
    description: "",
    players: 2,
    showErr: false,
    err: "",
  });

  const handleChange = (e) => {
    const f = e.currentTarget;
    switch (f.id) {
      case "title":
        if (f.value.length < 20)
          return setCompState({
            ...compState,
            title: f.value,
          });
        return;

      case "description":
        if (f.value.length < 40) {
          return setCompState({
            ...compState,
            description: f.value,
          });
        }
        return;

      default:
        return compState;
    }
  };

  const handleClick = (e) => {
    switch (e.currentTarget.id) {
      case "cancel":
        return props.dispatch(toggleDialog("newGameDialog"));
      case "create":
        const generatePlayers = (noOfPlayers) => {
          const arr = [];
          for (let i = 0; i < noOfPlayers; i++) {
            arr.push({
              id: uniqId(),
              name: `Player ${i + 1}`,
              score: 0,
            });
          }
          return arr;
        };

        const newGame = {
          id: compState.id,
          title: compState.title,
          description: compState.description,
          players: generatePlayers(compState.players),
          date_created: new Date(),
          date_modified: new Date(),
          in_progress: true,
        };

        const newGamesArr = props.games.concat([newGame]);
        props.dispatch(createGame(newGamesArr));
        return props.dispatch(toggleDialog("newGameDialog"));
      default:
        return;
    }
  };

  return (
    <Dialog
      maxWidth="sm"
      open={props.newGameDialog}
      onClose={() => props.dispatch(toggleDialog("newGameDialog"))}
    >
      <DialogTitle>Create New Scoreboard</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          id="title"
          fullWidth
          margin="dense"
          onChange={handleChange}
          value={compState.title}
        />
        <TextField
          label="Description"
          id="description"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={compState.description}
        />
        <TextField
          label="No. of players"
          id="players"
          defaultValue={2}
          style={{ width: "9rem" }}
          margin="normal"
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <RemoveCircle />
                </IconButton>
                <IconButton>
                  <AddCircle />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button id="cancel" onClick={handleClick}>
          Cancel
        </Button>
        <Button id="create" onClick={handleClick} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  games: state.games,
  newGameDialog: state.newGameDialog,
});
export default connect(mapStateToProps)(NewGame);
