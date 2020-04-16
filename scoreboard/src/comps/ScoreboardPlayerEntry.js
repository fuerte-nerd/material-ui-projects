import React from "react";
import { TableRow, TableCell, IconButton } from "@material-ui/core";

import { RemoveCircle, AddCircle } from "@material-ui/icons";

const ScoreboardPlayerEntry = (props) => {
  const handleClick = (e) => {
    const f = e.currentTarget;
    switch (f.id) {
      case "inc-score":
        return console.log(`increase score for ${props.name} clicked`);
      case "dec-score":
        return console.log(`increase score for ${props.name} clicked`);
      default:
        return console.log(`the row was clicked`);
    }
    console.log("clicked");
  };
  return (
    <TableRow hover key={props.id} id={props.id}>
      <TableCell id={`pos_${props.id}`} onClick={handleClick}>
        {props.position}
      </TableCell>
      <TableCell id={`nam_${props.id}`} onClick={handleClick}>
        {props.name}
      </TableCell>
      <TableCell id={`sco_${props.id}`} onClick={handleClick} align="right">
        {props.score}
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
};

export default ScoreboardPlayerEntry;
