import {
  CREATE_NEW_GAME,
  UPDATE_GAME,
  TOGGLE_DIALOG,
  LOAD_GAME,
  GET_GAMES,
} from "./types";

export const createGame = (newGameData) => ({
  type: CREATE_NEW_GAME,
  payload: newGameData,
});

export const updateGame = (updatedGameData) => ({
  type: UPDATE_GAME,
  payload: updatedGameData,
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
