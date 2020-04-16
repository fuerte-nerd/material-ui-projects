import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggleDialog } from "../redux/actions";

import { Scoreboard, EditPlayer } from "../Components";

import {
  Paper,
  Icon,
  IconButton,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Container,
  Grid,
  Divider,
  ListItem,
  Tooltip,
  ListItemIcon,
  ListItemText,
  List,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@material-ui/core";

import { Alert } from "@material-ui/lab";

import {
  Update,
  People,
  EmojiEvents,
  CalendarToday,
  Lock,
  LockOpen,
  AddCircle,
  RemoveCircle,
} from "@material-ui/icons";

import moment from "moment";

import newGameState from "./newGameState";

const ScoreboardViewer = (props) => {
  const [compState, setCompState] = useState(newGameState);

  useEffect(() => {
    setCompState(props.gameLoaded);
  }, [props.gameLoaded]);

  const handleClick = (e) => {
    switch (e.currentTarget.id) {
      case "back":
        // TODO: save data first
        props.dispatch(toggleDialog("viewerDialog"));
    }
  };

  return (
    <Dialog fullScreen open={props.isOpen}>
      <AppBar>
        <Toolbar>
          <Typography style={{ flex: 1 }}>Scoreboard</Typography>
          <Button color="inherit" edge="end" onClick={handleClick} id="back">
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <EditPlayer />
      <Box mt={3}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box>
                <TextField
                  fullWidth
                  multiline
                  InputProps={{
                    style: { fontSize: "4rem" },
                    disableUnderline: true,
                  }}
                  placeholder="Title"
                  defaultValue={compState.title}
                />
              </Box>
              <Box mt={1}>
                <TextField
                  fullWidth
                  defaultValue={compState.description}
                  multiline
                  InputProps={{ disableUnderline: true }}
                  placeholder="Description"
                />
              </Box>
              <Alert
                variant="filled"
                icon={compState.in_progress ? <LockOpen /> : <Lock />}
                color={compState.in_progress ? "success" : "error"}
              >
                {compState.in_progress
                  ? `This game is in progress`
                  : `This game has finished`}
              </Alert>
            </Grid>
            <Grid item xs={12} md={7}>
              <Scoreboard players={compState.players} />
              <Box
                align="center"
                display="flex"
                justifyContent="space-between"
                mt={2}
              >
                <Button color="primary">Add new player</Button>

                {compState.in_progress ? (
                  <Button color="secondary">Finish Game</Button>
                ) : (
                  <Button color="secondary">Resume Game</Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Dialog>
  );
};
const mapStateToProps = (state) => ({
  isOpen: state.viewerDialog,
  gameLoaded: state.gameLoadedInViewer,
});
export default connect(mapStateToProps)(ScoreboardViewer);
