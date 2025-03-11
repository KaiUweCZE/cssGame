import React, { useContext, useEffect, useState } from "react";
import { glassImg } from "@/data/imagesData";
import { CheckContext } from "@contexts/form-contexts/checkContext";
import AboutClassInfo from "./AboutClassInfo";
import AboutClassMenu from "./AboutClassMenu";
import MagnifierTemporaryLabel from "../../pages/game/game-components/labels/MagnifierTemporaryLabel";

const AboutClass = (props) => {
  const [option, setOption] = useState(false);
  const { active, setActive, aboutClass, setAboutClass } =
    useContext(CheckContext);

  const handleMenu = () => {
    setActive(false);
    setOption(!option);
  };

  useEffect(() => {
    setActive(false);
  }, []);

  return (
    <>
      <img
        className={
          props?.specificClass ? `glass ${props.specificClass}` : "glass"
        }
        src={glassImg}
        alt=""
        onClick={() => handleMenu()}
      />
      <div
        className={
          props?.specificClass
            ? `about-class ${props.specificClass}`
            : "about-class"
        }
      >
        {option && (
          <AboutClassMenu
            active={active}
            setActive={setActive}
            setAboutClass={setAboutClass}
          />
        )}
        {active && (
          <AboutClassInfo
            active={active}
            name={`.${aboutClass}`}
            information={props?.style}
          />
        )}
      </div>
      {props?.level === 1 ? <MagnifierTemporaryLabel option={option} /> : null}
    </>
  );
};

export default AboutClass;
