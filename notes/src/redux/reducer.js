import {
  ADD_NOTE,
  TOGGLE_VIEWER,
  LOAD_NOTE,
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
    case ADD_NOTE:
      return {
        ...state,
      };
    case LOAD_NOTE:
      return {
        ...state,
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
