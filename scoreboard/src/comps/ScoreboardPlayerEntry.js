import React from "react";

const ScoreboardPlayerEntry = () => {
  return (
    <TableRow hover key={i.id} id={i.id}>
      <TableCell id={`pos_${i.id}`} onClick={handleClick}>
        {getPosition(ind)}
      </TableCell>
      <TableCell id={`nam_${i.id}`} onClick={handleClick}>
        {i.name}
      </TableCell>
      <TableCell id={`sco_${i.id}`} onClick={handleClick} align="right">
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
};

export default ScoreboardPlayerEntry;
