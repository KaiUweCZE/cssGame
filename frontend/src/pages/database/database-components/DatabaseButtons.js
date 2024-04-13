import React from "react";
import confettiIcon from "@images/icons/confetti.svg";
import userIcon from "@images/icons/user.svg";
import dumbbellIcon from "@images/icons/dumbbell.svg";
import heartIcon from "@images/icons/heart.svg";

const DatabaseButtons = () => {
  return (
    <div className="database-buttons">
      <div className="wrapper-button">
        <div className="button-tooltip">
          <div className="button">
            <span>15</span>
            <img src={userIcon} alt="" />
          </div>
          <div className="tooltip">users played</div>
        </div>
        <div className="button-tooltip">
          <div className="button">
            <span>10</span>
            <img src={confettiIcon} alt="" />
          </div>
          <div className="tooltip">users finished</div>
        </div>
        <div className="button-tooltip">
          <div className="button">
            <span>6</span>
            <img src={heartIcon} alt="" />
          </div>
          <div className="tooltip">likes</div>
        </div>
        <div className="button-tooltip">
          <div className="button">
            <span>4.5</span>
            <img src={dumbbellIcon} alt="" />
          </div>
          <div className="tooltip">difficulty</div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseButtons;
