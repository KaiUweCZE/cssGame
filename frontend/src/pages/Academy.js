import React, { useContext, useState } from "react";
import { aboutLevelData } from "../data/AboutLevelData";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import AsideBox from "../components/AsideBox";
import academyImg from "../styles/images/academy2.webp";
import book1Img from "../styles/images/book1.webp";
import book2Img from "../styles/images/book2.webp";
import SecretText from "../components/SecretText";
import paperBg from "../styles/images/paper.webp";

//I need to try subgrid
const Academy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, login } = useContext(UserContext);

  const toClass = (i) => {
    navigate(`/level/${i}`);
  };

  return (
    <div className="wrapper-academy">
      <div className="container-about">
        {isOpen ? (
          <SecretText text={isOpen} func={setIsOpen} background={paperBg} />
        ) : (
          ""
        )}
        {aboutLevelData.map((level, index) => {
          return (
            <>
              {user.level + 1 < level.id ? (
                <article className="low-level" key={level.id}>
                  <h2>Your level is too low {level.id}</h2>
                </article>
              ) : (
                <article key={level.id}>
                  <h2>level {level.id}</h2>
                  <p>{level.introduction}</p>
                  <button onClick={() => toClass(level.id)}>more</button>
                </article>
              )}
            </>
          );
        })}
      </div>
      <AsideBox cssClass="academyLibrary" background={academyImg}>
        <div
          className="book bookOne"
          style={{ backgroundImage: `url(${book1Img})` }}
          onClick={() => setIsOpen("1")}
        ></div>
        <div
          className="book bookTwo"
          style={{ backgroundImage: `url(${book2Img})` }}
          onClick={() => setIsOpen("2")}
        ></div>
      </AsideBox>
    </div>
  );
};

export default Academy;
