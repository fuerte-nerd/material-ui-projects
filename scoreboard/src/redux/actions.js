import {
  CREATE_NEW_GAME,
  UPDATE_GAME,
  TOGGLE_DIALOG,
  LOAD_GAME,
  GET_GAMES,
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

export const getGames = (games) => ({
  type: GET_GAMES,
  payload: games,
});
