import React, { useContext } from "react";
import { ResultContext } from "@contexts/form-contexts/resultContext";
import { refreshIcon } from "@/data/imagesData";
import { useSetLevel } from "@utils/useSetLevel";
import next from "@images/icons/right-arrow.webp";
import refIcon from "@images/icons/refresh.png";

const MessageResult = () => {
  const { resultText, setResultText } = useContext(ResultContext);
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
        <button className="retry-button" onClick={handleRefresh}>
          <img className="retry" src={refIcon} alt="" width={16} height={16} />
          <span>retry</span>
        </button>
      ) : (
        level.id !== 26 && (
          <button
            className="next-level-button"
            onClick={() => nextLevel(level.id + 1)}
          >
            <span>next level</span>
            <img className="next-level" src={next} alt="" />
          </button>
        )
      )}
    </div>
  );
};

export default MessageResult;
