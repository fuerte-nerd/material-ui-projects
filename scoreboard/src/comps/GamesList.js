import React from "react";
import { connect } from "react-redux";
import { NewGame, GamesListEntry } from "../Components";

import { Box, Grid, Typography, Fade } from "@material-ui/core";

const GamesList = (props) => {
  return (
    <Box mt={3}>
      {props.games && props.games.length > 0 ? (
        <Grid container spacing={2}>
          {props.games.map((i) => {
            return (
              <Fade in key={i.id}>
                <Grid item key={i.id} xs={12} md={6} lg={4}>
                  <GamesListEntry key={i.id} gameData={i} />
                </Grid>
              </Fade>
            );
          })}
        </Grid>
      ) : (
        <Typography>
          You currently don't have any saved scoreboards...
        </Typography>
      )}

      <NewGame />
    </Box>
  );
};

const mapStateToProps = (state) => ({
  games: state.games,
});

export default connect(mapStateToProps)(GamesList);
