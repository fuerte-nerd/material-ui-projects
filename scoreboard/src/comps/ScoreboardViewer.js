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
  Divider,
  ListItem,
  Tooltip,
  ListItemIcon,
  ListItemText,
  List,
} from "@material-ui/core";

import { Update, People, EmojiEvents, CalendarToday } from "@material-ui/icons";

import moment from "moment";

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
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                InputProps={{
                  style: { fontSize: "4rem" },
                }}
                placeholder="Title"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth multiline placeholder="Description" />
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
                    {moment().diff(
                      moment(props.gameData.date_created),
                      "days"
                    ) < 365
                      ? moment(props.gameData.date_created).format("Do MMMM")
                      : moment(props.gameData.date_created).format(
                          "Do MMMM YYYY"
                        )}
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
                    {moment(props.gameData.date_modified).fromNow()}
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
                    {props.gameData.players.length}
                    {props.gameData.players.length > 1 ? ` players` : ` player`}
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                  <Tooltip
                    title={
                      props.gameData.in_progress ? `Current leader` : `Winner`
                    }
                    placement="left"
                  >
                    <ListItemIcon edge="start">
                      <EmojiEvents />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText>
                    {leader.name}
                    {props.gameData.in_progress ? ` is winning` : ` won`}
                  </ListItemText>
                </ListItem>
                <Divider />
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Dialog>
  );
};

export default ScoreboardViewer;
