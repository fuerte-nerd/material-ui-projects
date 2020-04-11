import React from "react";
import { GamesListEntry } from "../Components";

import { Grid } from "@material-ui/core";

import Data from "../Data";

const GamesList = () => {
  return (
    <Grid container spacing={2}>
      {Data.map((i) => {
        return (
          <Grid item xs={12} md={6}>
            <GamesListEntry gameData={i} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GamesList;
