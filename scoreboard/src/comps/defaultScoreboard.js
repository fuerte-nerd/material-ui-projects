import uniqId from "uniqid";

export default {
  id: uniqId(),
  title: "",
  description: "",
  players: [],
  date_created: new Date(),
  date_modified: null,
  in_progress: true,
};
