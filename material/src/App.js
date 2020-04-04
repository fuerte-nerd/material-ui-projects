import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { toggleAddTodoDialog } from "./redux/actions";

import logo from "./logo.svg";
import "./App.css";

import Head from "./comps/Head";
import Todos from "./comps/Todos";
import AddTodo from "./comps/AddTodo";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";

function App(props) {
  // const [todos, setTodos] = useState([]);

  const toggle = () => {
    props.dispatch(toggleAddTodoDialog());
  };

  // useEffect(() => {
  //   setTodos(JSON.parse(localStorage.getItem("daves_todo_app")));
  // }, [props.todos]);

  return (
    <>
      <Head />
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          bottom: "3rem",
          right: "3rem",
        }}
        onClick={toggle}
      >
        <AddIcon />
      </Fab>
      <AddTodo />
      <Container>
        <Box style={{ textAlign: "center" }}>
          <Typography variant="h1">A simple todo app</Typography>
          <Typography variant="subtitle2">by David Andrews</Typography>
        </Box>
        <Box>
          <Todos />
        </Box>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => ({
  isAddToDoOpen: state.isAddToDoOpen,
  todos: state.todos,
});
export default connect(mapStateToProps)(App);
