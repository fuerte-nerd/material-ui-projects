import React, { useState } from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Box,
  Icon,
  IconButton,
  Paper,
  TableBody,
} from "@material-ui/core";

import { RemoveCircle, AddCircle } from "@material-ui/icons";

const Scoreboard = (props) => {
  const getPosition = (index) => {
    if (index > 0) {
      return props.players[index].score === props.players[index - 1].score
        ? null
        : index + 1;
    } else {
      return index + 1;
    }
  };

  const handleClick = (e) => {
    const target = e.currentTarget;
    console.log(e.target);
    const regexs = [/$pos_/g, /$nam_/g, /$sco_/g];

    regexs.map((i) => {
      if (target.id.match(i)) {
        console.log("reached");
      }
    });
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
          {typeof props.players === "object"
            ? props.players.map((i, ind) => {
                return (
                  <TableRow hover key={i.id} id={i.id}>
                    <TableCell id={`pos_${i.id}`} onClick={handleClick}>
                      {getPosition(ind)}
                    </TableCell>
                    <TableCell id={`nam_${i.id}`} onClick={handleClick}>
                      {i.name}
                    </TableCell>
                    <TableCell
                      id={`sco_${i.id}`}
                      onClick={handleClick}
                      align="right"
                    >
                      {i.score}
                    </TableCell>
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
              })
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Scoreboard;
