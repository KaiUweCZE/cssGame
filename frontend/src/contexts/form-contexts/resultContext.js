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
    // array helper for observing used checkpoints
    const usedCheckpoints = new Array(checkpointRef.current.length).fill(false);
    let correctPositions = 0;

    // Assuming bridgeRef and checkpointRef are arrays of equal length
    for (let i = 0; i < bridgeRef.current.length; i++) {
      const bridgeRect = bridgeRef.current[i].getBoundingClientRect();
      let foundMatch = false;
      console.log("bridgeRect", bridgeRect);

      for (let j = 0; j < checkpointRef.current.length; j++) {
        // skip if checkpoint was already used for another bridge part
        if (usedCheckpoints[j]) continue;

        const checkRect = checkpointRef.current[j].getBoundingClientRect();
        const isLeftCorrect =
          Math.abs(bridgeRect.left - checkRect.left) < tolerance;
        const isRightCorrect =
          Math.abs(bridgeRect.right - checkRect.right) < tolerance;
        const isTopCorrect =
          Math.abs(bridgeRect.top - checkRect.top) < tolerance;

        if (isLeftCorrect && isRightCorrect && isTopCorrect) {
          // mark checkpoint as used
          usedCheckpoints[j] = true;
          correctPositions++;
          foundMatch = true;
        }
      }

      if (!foundMatch) {
        // if bridge does not match any checkpoint, set result to false and return
        setIsCorrectPosition(false);
        setChecked(() => ({ check: true, result: false }));
        return;
      }

      // if all checkpoints are marked as true, set result to true
      const allCheckpointsUsed = usedCheckpoints.every((used) => used);
      if (correctPositions == bridgeRef.current.length && allCheckpointsUsed) {
        setIsCorrectPosition(true);
      } else {
        setChecked({ check: true, result: false });
        setIsCorrectPosition(false);
      }
    }

    // If all positions are correct
    if (correctPositions === bridgeRef.current.length) {
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
