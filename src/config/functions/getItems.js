const getItems = (arr, limit) => {
  let newArr = [...arr];
 
    newArr = newArr.slice(0, limit);
    return newArr;
  
};
