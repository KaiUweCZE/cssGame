import { list } from "../data/listOfProperities";

export const checkProperties = (properties) => {
  let result;
  const invalidProperties = properties.filter(
    (prop) => !list.includes(prop) && prop !== ""
  );

  if (invalidProperties.length === 0) {
    return (result = true);
  } else {
    return (result = false);
  }

  return result;
};
