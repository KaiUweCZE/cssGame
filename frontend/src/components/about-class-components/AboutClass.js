import React, { act, useContext, useEffect, useState } from "react";
import { glassImg } from "@/data/imagesData";
import { CheckContext } from "@contexts/form-contexts/checkContext";
import AboutClassInfo from "./AboutClassInfo";
import AboutClassMenu from "./AboutClassMenu";
import MagnifierTemporaryLabel from "../../pages/game/game-components/labels/MagnifierTemporaryLabel";

const AboutClass = ({ level, styles, specificClass }) => {
  const [option, setOption] = useState(false);
  const { active, setActive, aboutClass, setAboutClass } =
    useContext(CheckContext);

  const style = aboutClass === "container" ? styles.container : styles.bridge;

  const handleMenu = () => {
    setActive(false);
    setOption(!option);
  };

  useEffect(() => {
    setActive(false);
  }, []);

  console.log({
    "about level": level,
    styles: styles,
    "what is this? ": aboutClass,
    active,
  });

  return (
    <section className="about-class-container">
      <img
        className={specificClass ? `glass ${specificClass}` : "glass"}
        src={glassImg}
        alt=""
        onClick={() => handleMenu()}
      />
      {option && (
        <div
          className={
            specificClass
              ? `about-class ${specificClass} ${option && "about-open"}`
              : `about-class ${option && "about-open"}`
          }
        >
          <AboutClassMenu
            active={active}
            setActive={setActive}
            setAboutClass={setAboutClass}
          />

          {active && (
            <AboutClassInfo
              active={active}
              name={`.${aboutClass}`}
              info={style}
            />
          )}
        </div>
      )}
      {level === 1 ? <MagnifierTemporaryLabel option={option} /> : null}
    </section>
  );
};

export default AboutClass;
