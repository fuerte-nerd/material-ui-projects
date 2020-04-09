import {
  ADD_NOTE,
  TOGGLE_VIEWER,
  LOAD_NOTE,
  LOAD_NOTES,
  UPDATE_NOTE,
  DELETE_NOTE,
  TOGGLE_AUTOSAVE,
  UPDATE_AUTOSAVE_INTERVAL,
} from "./types";

const initialState = {
  isViewerOpen: false,
  noteLoaded: null,
  notes: [],
  autosave: true,
  autosave_interval: 30000,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_AUTOSAVE:
      return {
        ...state,
        autosave: !state.autosave,
      };

    case UPDATE_AUTOSAVE_INTERVAL:
      return {
        ...state,
        autosave_interval: action.payload,
      };
    case LOAD_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat([action.payload]),
      };
    case LOAD_NOTE:
      return {
        ...state,
        noteLoaded: state.notes.filter((i) => {
          return i.id === action.payload ? i : null;
        })[0],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((i) => {
          return i.id !== action.payload ? i : null;
        }),
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((i) => {
          return i.id === action.payload.id ? action.payload : i;
        }),
      };
    case TOGGLE_VIEWER:
      return {
        ...state,
        isViewerOpen: !state.isViewerOpen,
      };
    default:
      return state;
  }
};
