import React from "react";
import Todo from "./Todo";

const Todos = () => {
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
    <div>
      {dummyData.map((i) => {
        return <Todo data={i} />;
      })}
    </div>
  );
};

export default Todos;
