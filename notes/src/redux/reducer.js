import {
  ADD_NOTE,
  TOGGLE_VIEWER,
  LOAD_NOTE,
  LOAD_NOTES,
  UPDATE_NOTE,
  DELETE_NOTE,
} from "./types";

const initialState = {
  isViewerOpen: false,
  noteLoaded: null,
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
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
      };
    case UPDATE_NOTE:
      return {
        ...state,
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
