export default (array) => {
  const arrClone = array.slice().sort((a, b) => {
    return a.score < b.score ? -1 : 1;
  });

  return arrClone;
};
