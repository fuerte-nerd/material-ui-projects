import {
  TOGGLE_ADD_TODO_MODAL,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_DONE,
} from "./types";

export const toggleAddTodoModal = () => {
  return {
    type: TOGGLE_ADD_TODO_MODAL,
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const deleteTodo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};

export const toggleDone = (todo) => {
  return {
    type: TOGGLE_DONE,
    payload: todo,
  };
};
