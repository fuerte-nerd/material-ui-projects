import React, { useEffect } from "react";

import { connect } from "react-redux";
import { toggleAddTodoDialog } from "./redux/actions";

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
  const toggle = () => {
    props.dispatch(toggleAddTodoDialog());
  };

  useEffect(() => {
    localStorage.setItem("daves_todo_app", JSON.stringify(props.todos));
  }, [props.todos]);

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
          <Typography variant="h1">Todos</Typography>
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
  todos: state.todos,
});
export default connect(mapStateToProps)(App);
