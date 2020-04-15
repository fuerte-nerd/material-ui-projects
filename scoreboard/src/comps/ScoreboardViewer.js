import React from "react";
import { connect } from "react-redux";
import { toggleDialog } from "../redux/actions";

import { EditPlayer } from "../Components";

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

import TempData from "../Data";

const ScoreboardViewer = (props) => {
  const {
    title,
    date_created,
    date_modified,
    description,
    players,
    in_progress,
  } = TempData[0];

  const leader = players.reduce((acc, cv) => {
    return cv.score > acc.score ? cv : acc;
  }, players[0]);

  const getPosition = (index) => {
    if (index > 0) {
      return players[index].score === players[index - 1].score
        ? null
        : index + 1;
    } else {
      return index + 1;
    }
  };

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
                  defaultValue={title}
                />
              </Box>
              <Box mt={1}>
                <TextField
                  fullWidth
                  defaultValue={description}
                  multiline
                  InputProps={{ disableUnderline: true }}
                  placeholder="Description"
                />
              </Box>
              <Alert
                variant="filled"
                icon={in_progress ? <LockOpen /> : <Lock />}
                color={in_progress ? "success" : "error"}
              >
                {in_progress
                  ? `This game is in progress`
                  : `This game has finished`}
              </Alert>
              <List>
                <Divider />
                <ListItem>
                  <Tooltip title="Date created" placement="left">
                    <ListItemIcon edge="start">
                      <CalendarToday />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText>
                    {`Created on `}
                    {moment().diff(moment(date_created), "days") < 365
                      ? moment(date_created).format("Do MMMM")
                      : moment(date_created).format("Do MMMM YYYY")}
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                  <Tooltip title="Last update" placement="left">
                    <ListItemIcon edge="start">
                      <Update />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText>
                    {`Updated `}
                    {moment(date_modified).fromNow()}
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                  <Tooltip title="Number of players" placement="left">
                    <ListItemIcon edge="start">
                      <People />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText>
                    {players.length}
                    {players.length > 1 ? ` players` : ` player`}
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                  <Tooltip
                    title={in_progress ? `Current leader` : `Winner`}
                    placement="left"
                  >
                    <ListItemIcon edge="start">
                      <EmojiEvents />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText>
                    {leader.name}
                    {in_progress ? ` is winning` : ` won`}
                  </ListItemText>
                </ListItem>
                <Divider />
              </List>
            </Grid>
            <Grid item xs={12} md={7}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell width="10%">Pos.</TableCell>
                      <TableCell width="50%">Name</TableCell>
                      <TableCell width="30%" align="right">
                        Score
                      </TableCell>
                      <TableCell width="5%" align="center" padding="none">
                        <Box mt={1}>
                          <Icon>
                            <RemoveCircle />
                          </Icon>
                        </Box>
                      </TableCell>
                      <TableCell width="5%" align="center" padding="none">
                        <Box mt={1}>
                          <Icon>
                            <AddCircle />
                          </Icon>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {players.map((i, ind) => {
                      return (
                        <TableRow>
                          <TableCell>{getPosition(ind)}</TableCell>
                          <TableCell>{i.name}</TableCell>
                          <TableCell align="right">{i.score}</TableCell>
                          <TableCell align="center" padding="none">
                            <IconButton>
                              <RemoveCircle />
                            </IconButton>
                          </TableCell>
                          <TableCell align="center" padding="none">
                            <IconButton>
                              <AddCircle />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                align="center"
                display="flex"
                justifyContent="space-between"
                mt={2}
              >
                <Button color="primary">Add new player</Button>

                {in_progress ? (
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
