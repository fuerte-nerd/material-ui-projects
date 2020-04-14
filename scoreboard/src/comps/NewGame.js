import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

const NewGame = () => {
  return (
    <Dialog fullScreen open>
      <DialogTitle>Hello</DialogTitle>
      <DialogContent>Yes</DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGame;
