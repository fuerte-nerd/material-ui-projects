import React, { useEffect } from "react";

import { connect } from "react-redux";
import Todo from "./Todo";

import List from "@material-ui/core/List";

const Todos = (props) => {
  useEffect(() => {
    const lsTodos = JSON.stringify(props.todos);

    localStorage.setItem("daves_todo_app", lsTodos);
  }, [props.todos]);
  const dummyData = [
    {
      id: 1,
      title: "First Todo",
      done: false,
      create_date: new Date(2020, 3, 2),
      complete_date: null,
    },
    {
      id: 2,
      title: "Second Todo",
      done: false,
      create_date: new Date(2020, 3, 2),
      complete_date: null,
    },
  ];
  return (
    <List>
      {dummyData.map((i) => {
        return <Todo data={i} />;
      })}
    </List>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todos);
