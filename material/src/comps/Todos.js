import React, { useEffect } from "react";

import { connect } from "react-redux";
import Todo from "./Todo";

import List from "@material-ui/core/List";

const Todos = (props) => {
  return (
    <List>
      {props.todos.map((i) => {
        return <Todo data={i} />;
      })}
    </List>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todos);
