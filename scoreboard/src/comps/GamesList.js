import React from "react";
import { connect } from "react-redux";
import { NewGame, GamesListEntry } from "../Components";

import { Box, Grid, Typography } from "@material-ui/core";

import Data from "../Data";

const GamesList = (props) => {
  return (
    <Box mt={3}>
      {props.games && props.games.length > 0 ? (
        <Grid container spacing={2}>
          {props.games.map((i) => {
            return (
              <Grid item key={i.id} xs={12} md={6} lg={4}>
                <GamesListEntry gameData={i} />
              </Grid>
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
