import { ADD_TODO, DELETE_TODO, TOGGLE_DONE } from "./types";

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
      };
    case DELETE_TODO:
      return {
        ...state,
      };
    case TOGGLE_DONE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
