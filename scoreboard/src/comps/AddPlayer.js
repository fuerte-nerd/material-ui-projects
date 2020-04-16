import React from "react";
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

const AddPlayer = (props) => {
  const handleClick = (e) => {
    switch (e.currentTarget.id) {
      case "cancel":
        return props.dispatch(toggleDialog("addPlayerDialog"));

      case "add":
        let newGamesArr = props.games.map((i)=>{
          if()
        }) 
      default: return
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
            <TextField label="Name" autoFocus fullWidth />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField label="Score" fullWidth type="number" defaultValue="0" />
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
  gameLoaded: state.gameLoadedInViewer
});
export default connect(mapStateToProps)(AddPlayer);
