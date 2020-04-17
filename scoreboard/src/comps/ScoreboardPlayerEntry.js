import React from "react";
import { connect } from "react-redux";

import { updateGames, toggleDialog, loadPlayer } from "../redux/actions";
import { TableRow, TableCell, IconButton } from "@material-ui/core";

import { RemoveCircle, AddCircle } from "@material-ui/icons";

const ScoreboardPlayerEntry = (props) => {
  const handleClick = (e) => {
    const f = e.currentTarget;
    switch (f.id) {
      case "inc-score":
        const newGamesArray = props.games.map((i) => {
          if (i.id === props.gameLoaded.id) {
            return {
              ...i,
              players: i.players
                .map((player) => {
                  if (player.id === props.id) {
                    return {
                      ...player,
                      score: player.score + 1,
                    };
                  } else {
                    return player;
                  }
                })
                .sort((a, b) => {
                  return a.score < b.score ? 1 : -1;
                }),
            };
          } else {
            return i;
          }
        });

        return props.dispatch(updateGames(newGamesArray));
      case "dec-score":
        return console.log(`increase score for ${props.name} clicked`);
      default:
        props.dispatch(loadPlayer(props.gameLoaded.id, props.id));
        return props.dispatch(toggleDialog("editPlayerDialog"));
    }
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
        <IconButton onClick={handleClick} id="dec-score">
          <RemoveCircle />
        </IconButton>
      </TableCell>
      <TableCell align="center" padding="none">
        <IconButton onClick={handleClick} id="inc-score">
          <AddCircle />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const mapStateToProps = (state) => ({
  gameLoaded: state.gameLoadedInViewer,
  games: state.games,
});
export default connect(mapStateToProps)(ScoreboardPlayerEntry);
