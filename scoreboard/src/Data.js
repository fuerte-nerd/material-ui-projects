export default [
  {
    id: 1,
    title: "My brilliant game!",
    description: "Good golly...this is the very first description!",
    date_created: new Date(2020, 2, 3),
    date_modified: new Date(2020, 2, 10),
    in_progress: true,
    players: [
      {
        name: "John",
        score: 50,
      },
      {
        name: "Linda",
        score: 50,
      },
      {
        name: "Harry",
        score: 50,
      },
      {
        name: "Howard",
        score: 50,
      },
      {
        name: "BenHoward",
        score: 40,
      },
    ],
  },
  {
    id: 2,
    title: "My brilliant second game!",
    description: "This is the second dummy data game. How exciting!?",
    date_created: new Date(2020, 3, 5),
    date_modified: new Date(2020, 3, 7),
    in_progress: false,
    players: [
      {
        name: "Dan",
        score: 100,
      },
      {
        name: "Alan",
        score: 50,
      },
      {
        name: "Brian",
        score: 25,
      },
    ],
  },
];
