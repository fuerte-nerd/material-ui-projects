import React from "react";

import { ScoreboardPlayerEntry } from "../Components";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Box,
  Icon,
  Paper,
  TableBody,
} from "@material-ui/core";

import { RemoveCircle, AddCircle } from "@material-ui/icons";

const Scoreboard = (props) => {
  const getPosition = (index) => {
    if (index > 0) {
      return props.gameData.players[index].score ===
        props.gameData.players[index - 1].score
        ? null
        : index + 1;
    } else {
      return index + 1;
    }
  };

  return (
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
          {typeof props.gameData.players === "object"
            ? props.gameData.players.map((i, ind) => {
                return (
                  <ScoreboardPlayerEntry
                    key={i.id}
                    position={getPosition(ind)}
                    name={i.name}
                    score={i.score}
                    id={i.id}
                    inProgress={props.gameData.in_progress}
                  />
                );
              })
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Scoreboard;
