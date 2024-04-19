export const cleanArray = (array) => {
  return [...new Set(array.filter((e) => e !== ""))].sort();
};

export const arraysEqual = (a, b) => {
  const cleanedA = cleanArray(a);
  const cleanedB = cleanArray(b);
  if (cleanedA.length !== cleanedB.length) return false;

  for (let i = 0; i < cleanedA.length; i++) {
    if (cleanedA[i] !== cleanedB[i]) return false;
  }
  return true;
};
