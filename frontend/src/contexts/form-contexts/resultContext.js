import React, { createContext, useState, useRef } from "react";

// Result evaluation
export const ResultContext = createContext({
  isCorrectPosition: "",
  setIsCorrectPosition: () => {},
  resultText: "",
  setResultText: () => {},
  checkpointRef: [],
  bridgeRef: [],
  checkBridgePosition: () => {},
});

export const ResultProvider = ({ children }) => {
  const [isCorrectPosition, setIsCorrectPosition] = useState(false);
  const [resultText, setResultText] = useState("");
  const [checked, setChecked] = useState({ check: false, result: false });
  const checkpointRef = useRef([]);
  const bridgeRef = useRef([]);

  const addToCheckpointRef = (element) => {
    if (element && !checkpointRef.current.includes(element)) {
      checkpointRef.current.push(element);
    }
  };

  const addToBridgeRef = (element) => {
    if (element && !bridgeRef.current.includes(element)) {
      bridgeRef.current.push(element);
    }
  };

  // the position of the part of bridge is compared with the position of the auxilliary
  // element, which is set at the correct location
  const checkBridgePosition = () => {
    const tolerance = 5;
    let correctPositions = 0;

    // Assuming bridgeRef and checkpointRef are arrays of equal length
    for (let i = 0; i < bridgeRef.current.length; i++) {
      const bridgeRect = bridgeRef.current[i].getBoundingClientRect();
      for (let j = 0; j < checkpointRef.current.length; j++) {
        const checkRect = checkpointRef.current[j].getBoundingClientRect();
        const isLeftCorrect =
          Math.abs(bridgeRect.left - checkRect.left) < tolerance;
        const isRightCorrect =
          Math.abs(bridgeRect.right - checkRect.right) < tolerance;
        const isTopCorrect =
          Math.abs(bridgeRect.top - checkRect.top) < tolerance;
        if (isLeftCorrect && isRightCorrect && isTopCorrect) {
          correctPositions += 1;
        } else {
          // If any position is not correct, no need to check further
          setIsCorrectPosition(false);
        }
      }
    }

    // If all positions are correct
    if (correctPositions === bridgeRef.current.length) {
      console.log("All positions are correct!");
      setIsCorrectPosition(true);
    } else {
      setChecked(() => ({ check: true, result: false }));
      setIsCorrectPosition(false);
    }
  };

  const contextValue = {
    isCorrectPosition,
    setIsCorrectPosition,
    resultText,
    setResultText,
    checkpointRef,
    addToCheckpointRef,
    addToBridgeRef,
    bridgeRef,
    checkBridgePosition,
    checked,
    setChecked,
  };

  return (
    <ResultContext.Provider value={contextValue}>
      {children}
    </ResultContext.Provider>
  );
};
