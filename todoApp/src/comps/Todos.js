import React from "react";

import { connect } from "react-redux";
import Todo from "./Todo";

import { List, ListItem, ListItemText } from "@material-ui/core";

const Todos = (props) => {
  return (
    <List>
      {props.todos.length > 0 ? (
        props.todos.map((i) => {
          return <Todo key={i.id} data={i} />;
        })
      ) : (
        <ListItem center>
          <ListItemText primary="You currently have nothing to do!  SURELY NOT? ;)" />
        </ListItem>
      )}
    </List>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todos);
