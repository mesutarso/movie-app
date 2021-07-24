const getItemsbyplage = (arr, start, end) => {
  let newArr = [...arr];
  newArr = newArr.slice(start, end);
  return newArr;
};
