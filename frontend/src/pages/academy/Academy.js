import React, { useContext, useState } from "react";
import { aboutLevelData } from "@/pages/academy/data/AboutLevelData";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@contexts/UserContext";
import AsideBox from "@/components/aside/AsideBox";
import academyImg from "@images/academy2.webp";
import book1Img from "@images/book1.webp";
import book2Img from "@images/book2.webp";
import SecretText from "@components/aside/SecretText";
import paperBg from "@images/paper.webp";

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
        {aboutLevelData.map((level, index) => (
          <React.Fragment key={level.id}>
            {user.level + 1 < level.id ? (
              <article className="low-level">
                <h2>Your level is too low {level.id}</h2>
              </article>
            ) : (
              <article>
                <h2>level {level.id}</h2>
                <p>{level.introduction}</p>
                <button onClick={() => toClass(level.id)}>more</button>
              </article>
            )}
          </React.Fragment>
        ))}
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
