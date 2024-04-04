import React, { useContext } from "react";
import { ResultContext } from "@contexts/form-contexts/resultContext";
import { refreshIcon } from "@data/ImagesData";
import { useSetLevel } from "@utils/useSetLevel";
import next from "@images/icons/right-arrow.webp";

const ResultMessage = () => {
  const { resultText } = useContext(ResultContext);
  const { nextLevel, level } = useSetLevel();

  const handleRefresh = () => {
    window.location.href = "/game";
  };

  return (
    <div className="message-result">
      <h2
        className={
          resultText === "" ? "" : resultText === "Congrats" ? "win" : "lost"
        }
      >
        {resultText}
      </h2>
      {resultText === "Oops" && resultText ? (
        <button onClick={() => handleRefresh()}>
          <img className="retry" src={refreshIcon} alt="" />
          <span>retry</span>
        </button>
      ) : (
        <button onClick={() => nextLevel(level.id + 1)}>
          <span>next level</span>
          <img className="next-level" src={next} alt="" />
        </button>
      )}
    </div>
  );
};

export default ResultMessage;
