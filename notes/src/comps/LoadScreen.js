import React from "react";
import { Dialog, Box, Typography, CircularProgress } from "@material-ui/core";
const LoadScreen = () => {
  return (
    <Dialog
      fullScreen
      open={true}
      transitionDuration={{ enter: 0, exit: 500 }}
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
        <CircularProgress size={80} />
        <Box display="block">
          <Typography>Loading notes...</Typography>
        </Box>
      </Box>
    </Dialog>
  );
};

export default LoadScreen;
