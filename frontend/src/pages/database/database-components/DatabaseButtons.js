import React, { useContext, useEffect } from "react";
import confettiIcon from "@images/icons/confetti.svg";
import confettiColored from "@images/icons/confettiDone.webp";
import userIcon from "@images/icons/user.svg";
import userPlayedIcon from "@images/icons/user-played.webp";
import dumbbellIcon from "@images/icons/dumbbell.svg";
import heartIcon from "@images/icons/heart.svg";
import likedIcon from "@images/icons/heart-liked.webp";
import { UserContext } from "@contexts/UserContext";
import { useLikeLevel } from "@utils/queries/useLikeLevel";
import { useUnlikeLevel } from "@utils/queries/useUnlikeLevel";

const DatabaseButtons = ({
  levelId,
  likesList,
  likeCount,
  finishes,
  usersPlayed,
  usersCount,
}) => {
  const { user } = useContext(UserContext);
  const { likeLevel, error, data } = useLikeLevel();

  const { unlikeLevel } = useUnlikeLevel();

  if (error) {
    console.error("Error liking the level:", error.message);
  }

  useEffect(() => {
    console.log("data: ", data);
  }, [likeLevel]);
  return (
    <div className="database-buttons">
      <div className="wrapper-button">
        <div className="button-tooltip">
          <div className="button">
            <span>{usersCount}</span>
            {usersPlayed?.includes(user.id) ? (
              <img src={userPlayedIcon} alt="" />
            ) : (
              <img src={userIcon} alt="" />
            )}
          </div>
          <div className="tooltip">users played</div>
        </div>
        <div className="button-tooltip">
          <div className="button">
            <span>{finishes}</span>
            {user?.completedLevels?.includes(levelId) ? (
              <img src={confettiColored} alt="" />
            ) : (
              <img src={confettiIcon} alt="" />
            )}
          </div>
          <div className="tooltip">users finished</div>
        </div>
        <div className="button-tooltip">
          <div
            className="button"
            onClick={
              likesList?.includes(user.id)
                ? () => unlikeLevel(levelId, user.id)
                : () => likeLevel(levelId, user.id)
            }
          >
            <span>{likeCount}</span>
            {likesList?.includes(user.id) ? (
              <img src={likedIcon} />
            ) : (
              <img src={heartIcon} alt="" />
            )}
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
