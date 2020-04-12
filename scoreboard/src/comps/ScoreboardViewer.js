import React from "react";

import {
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
  Delete,
  Edit,
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box>
                <TextField
                  fullWidth
                  InputProps={{
                    style: { fontSize: "4rem" },
                    disableUnderline: true,
                  }}
                  placeholder="Title"
                  defaultValue={title}
                />
              </Box>
              <Box mt={3}>
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
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell width="40%">Name</TableCell>
                      <TableCell width="20%" align="right">
                        Score
                      </TableCell>
                      <TableCell width="10%" align="center">
                        <Icon fontSize="small">
                          <Edit />
                        </Icon>
                      </TableCell>
                      <TableCell width="10%" align="center">
                        <Icon>
                          <Delete />
                        </Icon>
                      </TableCell>
                      <TableCell width="10%" align="center">
                        <Icon>
                          <RemoveCircle />
                        </Icon>
                      </TableCell>
                      <TableCell width="10%" align="center">
                        <Icon>
                          <AddCircle />
                        </Icon>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {players.map((i) => {
                      return (
                        <TableRow>
                          <TableCell>{i.name}</TableCell>
                          <TableCell align="right">{i.score}</TableCell>
                          <TableCell align="center">
                            <IconButton>
                              <Edit />
                            </IconButton>
                          </TableCell>
                          <TableCell align="center">
                            <IconButton>
                              <Delete />
                            </IconButton>
                          </TableCell>
                          <TableCell align="center">
                            <IconButton>
                              <RemoveCircle />
                            </IconButton>
                          </TableCell>
                          <TableCell align="center">
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Dialog>
  );
};

export default ScoreboardViewer;
