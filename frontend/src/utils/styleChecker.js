/*
level contain data about level(id, containerStyles, bridgeStyles, etc.)
formName is the name of the form that specifies which styles have been entered.
for example opacity: 0 from .bridge form
styleProperties & styleValues are arrays that contain user's inputs
*/
export const styleChecker = (level, formName, styleProperties, styleValues) => {
  let correctProperty;
  let correctValue;

  switch (formName) {
    case "bridge":
      if (!level.styleResultBridge) {
        return false;
      } else {
        correctProperty = Object.keys(level.styleResultBridge)[0];
        correctValue = level.styleResultBridge[correctProperty];
      }
      break;

    case "container":
      if (!level.styleResultContainer) {
        return false;
      } else {
        correctProperty = Object.keys(level.styleResultContainer)[0];
        correctValue = level.styleResultContainer[correctProperty];
      }
      break;

    default:
      return false;
  }

  // Check if styles has been entered
  if (
    !styleProperties ||
    !styleValues ||
    styleProperties.length === 0 ||
    styleValues.length === 0
  ) {
    return false;
  }
  for (let i = 0; i < styleValues.length; i++) {
    if (
      styleProperties[i] === correctProperty &&
      styleValues[i] === correctValue
    ) {
      return true;
    }
  }
  console.log("wrong styles", formName, styleValues, styleProperties);
  return false;
};
