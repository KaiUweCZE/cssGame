export const checkAllowedList = (firstArray, secondArray) => {
  return firstArray.every((e) => secondArray.includes(e));
};
