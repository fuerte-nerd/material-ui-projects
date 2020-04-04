import { ADD_TODO, DELETE_TODO, TOGGLE_DONE } from "./types";

const getTodos = () => {
  if (localStorage.getItem("dave_todos_app")) {
    return localStorage.getItem("dave_todos_app");
  } else {
    return [];
  }
};

const initialState = {
  todos: getTodos(),
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
