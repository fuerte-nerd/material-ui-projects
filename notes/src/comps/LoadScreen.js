import React from "react";
import { Dialog, Box, CircularProgress } from "@material-ui/core";
const LoadScreen = () => {
  return (
    <Dialog
      fullScreen
      open={true}
      transitionDuration={0}
      disableEscapeKeyDown
      disableBackdropClick
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress size={120} />
      </Box>
    </Dialog>
  );
};

export default LoadScreen;
