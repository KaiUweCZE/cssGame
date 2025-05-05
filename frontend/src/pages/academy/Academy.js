import React, { useContext, useState } from "react";
import { aboutLevelData } from "@/pages/academy/data/about-level-data";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@contexts/UserContext";
import AsideBox from "@/components/aside/AsideBox";
import academyImg from "@images/academy2.webp";
import book1Img from "@images/book1.webp";
import book2Img from "@images/book2.webp";
import SecretText from "@components/aside/SecretText";
import paperBg from "@images/paper.webp";
import { lockIcon } from "@/data/imagesData";

const Academy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const toClass = (i) => {
    navigate(`/level/${i}`);
  };

  const getCategoryNumber = () => {
    if (user.level > 17) return 4;
    if (user.level > 11) return 3;
    if (user.level >= 5) return 2;
    return 1;
  };

  const categoryNumber = getCategoryNumber();

  return (
    <div className="wrapper-academy">
      <section className="container-about">
        {isOpen && (
          <SecretText text={isOpen} func={setIsOpen} background={paperBg} />
        )}
        {aboutLevelData.map((level, index) => (
          <React.Fragment key={level.id}>
            {categoryNumber < level.id ? (
              <button
                className="button-academy low-level"
                disabled={categoryNumber < level.id}
              >
                <img src={lockIcon} alt="" width={32} height={32} />
              </button>
            ) : (
              <button
                className="button-academy"
                onClick={() => toClass(level.id)}
              >
                <span>{level.name}</span>
              </button>
            )}
          </React.Fragment>
        ))}
      </section>
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
