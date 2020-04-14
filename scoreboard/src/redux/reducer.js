import { TOGGLE_DIALOG, CREATE_NEW_GAME, UPDATE_GAME } from "./types";

const initialState = {
  games: [],
  gameLoadedInViewer: null,
  dialogs: {
    viewer: false,
    newGame: false,
    addPlayer: false,
    editPlayer: false,
  },
};
