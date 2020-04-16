import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleDialog } from "../redux/actions";
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
    name: "",
    score: 0,
  });

  const handleChange = (e) => {
    const f = e.currentTarget;
    switch (f.id) {
      case "title":
        return setCompState({
          ...compState,
          title: f.value,
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

  const handleClick = (e) => {
    switch (e.currentTarget.id) {
      case "cancel":
        return props.dispatch(toggleDialog("addPlayerDialog"));

      case "add":
        const newPlayer = {
          id: uniqId(),
          name: compState.name,
          score: compState.score,
        };

        let newGamesArr = props.games.map((i) => {
          if (props.gameLoaded.id === i.id) {
            i.players.concat();
          }
        });
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
              label="Name"
              value={compState.name}
              onChange={handleChange}
              autoFocus
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              label="Score"
              value={compState.score}
              onChange={handleChange}
              fullWidth
              type="number"
              style={{ WebkitAppearance: "none" }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleClick} id="cancel">
          Cancel
        </Button>
        <Button color="primary">Add</Button>
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
