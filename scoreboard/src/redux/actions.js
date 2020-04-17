import {
  UPDATE_GAME,
  TOGGLE_DIALOG,
  LOAD_GAME,
  GET_GAMES,
  LOAD_PLAYER,
} from "./types";

export const updateGames = (games) => ({
  type: UPDATE_GAME,
  payload: games,
});

export const toggleDialog = (dialog) => ({
  type: TOGGLE_DIALOG,
  payload: dialog,
});

export const loadGame = (id) => ({
  type: LOAD_GAME,
  payload: id,
});

export const loadPlayer = (gameId, playerId) => ({
  type: LOAD_PLAYER,
  payload: {
    gameId,
    playerId,
  },
});

export const getGames = (games) => ({
  type: GET_GAMES,
  payload: games,
});
