import React, { act, useContext, useEffect, useState } from "react";
import { glassImg } from "@/data/imagesData";
import { CheckContext } from "@contexts/form-contexts/checkContext";
import AboutClassInfo from "./AboutClassInfo";
import AboutClassMenu from "./AboutClassMenu";
import MagnifierTemporaryLabel from "../../pages/game/game-components/labels/MagnifierTemporaryLabel";

const AboutClass = ({ level, styles, specificClass }) => {
  const [option, setOption] = useState(false);
  const { active, setActive, aboutClass } = useContext(CheckContext);

  // const style = aboutClass === "container" ? styles["container"] : styles["bridge"];

  const handleMenu = () => {
    setActive(false);
    setOption(!option);
  };

  useEffect(() => {
    setActive(false);
  }, []);

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
          <AboutClassMenu parts={styles?.parts} />
          {active && (
            <AboutClassInfo
              active={active}
              name={aboutClass}
              info={styles[aboutClass]}
            />
          )}
        </div>
      )}
      {level === 1 ? <MagnifierTemporaryLabel option={option} /> : null}
    </section>
  );
};

export default AboutClass;
