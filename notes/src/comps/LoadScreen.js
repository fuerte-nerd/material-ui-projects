import React from "react";
import { Dialog } from "@material-ui/core";
const LoadScreen = () => {
  return (
    <Dialog
      fullScreen
      open={true}
      transitionDuration={0}
      disableEscapeKeyDown
      disableBackdropClick
    ></Dialog>
  );
};

export default LoadScreen;
