import { useContext, useState } from "react";
import { levelData } from "../data/LevelData";
import { LevelContext } from "@contexts/form-contexts/levelContext";
import { useNavigate } from "react-router-dom";

export const useSetLevel = () => {
  const [result, setResult] = useState("");
  const { setStyle, setLevel, level } = useContext(LevelContext);
  const navigate = useNavigate();

  const toLevel = (level) => {
    const currentLevel = levelData.find((e) => e.id === level);
    setResult(currentLevel.id);
    setLevel(currentLevel);
    console.log("current level", currentLevel);
    setStyle({
      container: currentLevel.containerStyles,
      bridge: currentLevel.bridgeStyles,
      partOfBridge: currentLevel.partOfBridgeStyles,
    });
    navigate("/game");
  };

  const nextLevel = (level) => {
    const currentLevel = levelData.find((e) => e.id === level);
    setResult(currentLevel.id);
    setLevel(currentLevel);
    console.log("current level", currentLevel);
    setStyle({
      container: currentLevel.containerStyles,
      bridge: currentLevel.bridgeStyles,
      partOfBridge: currentLevel.partOfBridgeStyles,
    });
    window.location.href = "/game";
  };

  return { toLevel, nextLevel, level };
};
