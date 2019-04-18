export default (...constants) =>
  constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
