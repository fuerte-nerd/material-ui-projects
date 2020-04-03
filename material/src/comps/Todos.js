import React from "react";

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
        return <h2>{i.title}</h2>;
      })}

      <h1>I am the todos</h1>
    </div>
  );
};

export default Todos;
