import uniqId from "uniqid";

export default () => ({
  id: uniqId(),
  title: "",
  body: "",
  create_date: new Date(),
  modified_date: null,
  locked: false,
});
