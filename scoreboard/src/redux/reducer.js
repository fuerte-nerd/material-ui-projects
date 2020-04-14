import {
  TOGGLE_DIALOG,
  CREATE_NEW_GAME,
  UPDATE_GAME,
  GET_GAMES,
  LOAD_GAME,
} from "./types";

const initialState = {
  games: [],
  gameLoadedInViewer: null,
  viewerDialog: false,
  newGameDialog: false,
  addPlayerDialog: false,
  editPlayerDialog: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    case GET_GAMES:
    case CREATE_NEW_GAME:
    case UPDATE_GAME:
      return {
        ...state,
        games: action.payload,
      };
    case LOAD_GAME:
      return {
        ...state,
        gameLoadedInViewer: action.payload,
      };
    default:
      return state;
  }
};
