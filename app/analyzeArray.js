const analyzeArray = (arr) => {
  if (!arr || arr.length === 0) return "arr is empty";
  const getLength = () => arr.length;
  const getAverage = () => arr.reduce((a, b) => a + b) / getLength();
  const getMin = () => {
    arr.sort((x, y) => x - y);
    return arr[0];
  };
  const getMax = () => {
    arr.sort((x, y) => x - y);
    return arr[arr.length - 1];
  };
  return {
    average: getAverage(),
    length: getLength(),
    min: getMin(),
    max: getMax(),
  };
};
module.exports = analyzeArray;
