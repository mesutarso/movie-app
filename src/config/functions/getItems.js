const getItems = (arr, limit) => {
  let newArr = [...arr];
  if (limit === 1) {
    return newArr[0];
  } else if (limit > 1) {
    newArr = newArr.slice(0, limit);
    return newArr;
  } else if (limit < 1 || isNaN(limit)) {
    throw new Error("limit must be a number");
  }
};
