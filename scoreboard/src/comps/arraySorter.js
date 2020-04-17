export default (array) => {
  const arrClone = array;

  arrClone.sort((a, b) => {
    console.log(a);
    console.log(b);
  });
};
