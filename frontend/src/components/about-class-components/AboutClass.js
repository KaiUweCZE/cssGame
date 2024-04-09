import React, { useContext, useState } from "react";
import { glassImg } from "@data/ImagesData";
import { CheckContext } from "@contexts/form-contexts/checkContext";
import AboutClassInfo from "./AboutClassInfo";
import AboutClassMenu from "./AboutClassMenu";
import TemporaryLabel from "../../pages/game/game-components/TemporaryLabel";

const AboutClass = (props) => {
  const [option, setOption] = useState(false);
  const { active, setActive, aboutClass, setAboutClass } =
    useContext(CheckContext);

  const handleMenu = () => {
    setActive(false);
    setOption(!option);
  };

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
        {option ? (
          <AboutClassMenu
            active={active}
            setActive={setActive}
            setAboutClass={setAboutClass}
          />
        ) : (
          ""
        )}
        {active ? (
          <AboutClassInfo
            active={active}
            name={`.${aboutClass}`}
            information={props?.style}
          />
        ) : (
          ""
        )}
      </div>
      {props?.level === 1 ? <TemporaryLabel /> : null}
    </>
  );
};

export default AboutClass;
