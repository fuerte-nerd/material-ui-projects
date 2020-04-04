import {
  TOGGLE_ADD_TODO_MODAL,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_DONE,
} from "./types";

const getTodos = () => {
  if (localStorage.getItem("dave_todos_app")) {
    return localStorage.getItem("dave_todos_app");
  } else {
    return [];
  }
};

const initialState = {
  todos: getTodos(),
  isAddToDoOpen: false,
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
    case TOGGLE_ADD_TODO_MODAL:
      return {
        ...state,
        isAddToDoOpen: !state.isAddToDoOpen,
      };
    default:
      return state;
  }
};
