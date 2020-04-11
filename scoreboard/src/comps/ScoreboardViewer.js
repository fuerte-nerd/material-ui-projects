import React from "react";

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

const ScoreboardViewer = (props) => {
  return (
    <Dialog fullScreen open={true}>
      <AppBar>
        <Toolbar>
          <Typography style={{ flex: 1 }}>Scoreboard</Typography>
          <Button color="inherit" edge="end">
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Box mt={3}>
        <Container>
          <Grid container>
            <TextField
              fullWidth
              InputProps={{ style: { fontSize: "4rem", marginBottom: "3rem" } }}
              placeholder="Title"
            />
            <TextField fullWidth multiline placeholder="Description" />
          </Grid>
        </Container>
      </Box>
    </Dialog>
  );
};

export default ScoreboardViewer;
