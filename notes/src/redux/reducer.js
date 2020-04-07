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
  console.log(state);
  switch (action.type) {
    case LOAD_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: {
        id: newId,
        title: "",
        body: "",
        locked: false,
        create_date: new Date(),
        modified_date: new Date(),
      }tate.notes.concat([action.payload]),
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
