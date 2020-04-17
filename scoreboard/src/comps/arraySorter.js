export default (array) => {
  const arrClone = array;
  console.log("reached");
  arrClone.sort((a, b) => {
    console.log(a);
    console.log(b);
  });
};
