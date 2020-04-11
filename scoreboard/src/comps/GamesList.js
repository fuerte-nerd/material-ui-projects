import React from "react";
import { GamesListEntry } from "../Components";

import { Box, Grid } from "@material-ui/core";

import Data from "../Data";

const GamesList = () => {
  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        {Data.map((i) => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <GamesListEntry gameData={i} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default GamesList;
