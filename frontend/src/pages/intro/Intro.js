import React, { useEffect, useState } from "react";
import "@styles/intro-styles.css";
import { enviromentImages, guideImg, masterImg } from "../../data/ImagesData";
import GuideEmoji from "@components/emojis/GuideEmoji";
import MainEmoji from "@components/emojis/MainEmoji";
import FirstScene from "@pages/intro/intro-components/FirstScene";
import SecondScene from "./intro-components/SecondScene";
import ThirdScene from "./intro-components/ThirdScene";
import { useNavigate } from "react-router-dom";

// this page will serve as an intro to the game
// and add story line
const Welcome = () => {
  const [scene, setScene] = useState("first");
  const navigate = useNavigate();

  useEffect(() => {
    if (scene === "last") {
      //const existingUser = localStorage.getItem('user')
      //const userObj = JSON.parse(existingUser)
      //userObj.intro = 'true'
      //localStorage.setItem('user', JSON.stringify(userObj));
      navigate("/map");
    }
  }, [scene]);

  return (
    <>
      {scene === "first" ? (
        <FirstScene scene={scene} setScene={setScene} />
      ) : null}
      {scene === "second" ? (
        <SecondScene scene={scene} setScene={setScene} />
      ) : null}
      {
        //scene === 'third' ? <ThirdScene scene={scene} setScene = {setScene} /> : null
      }
    </>
  );
};

export default Welcome;
