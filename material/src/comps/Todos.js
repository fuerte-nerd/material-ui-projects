import React, { useEffect } from "react";

import { connect } from "react-redux";
import Todo from "./Todo";

import List from "@material-ui/core/List";

const Todos = (props) => {
  useEffect(() => {
    console.log(typeof props.todos);
  }, [props.todos]);
  return (
    <List>
      {props.todos
        ? props.todos.map((i) => {
            return <Todo data={i} />;
          })
        : null}
    </List>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todos);
