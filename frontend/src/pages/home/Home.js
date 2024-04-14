import React from "react";
import HomeSection from "./home-components/HomeSection";
import "./home-style.css";
import { homeData } from "./data";
import HomeBox from "./home-components/HomeBox";
import useScrollPosition from "@utils/hooks/useScrollPosition";
import AnimationBox from "./home-components/AnimationBox";
import background from "@images/edit/animation-background.webp";
import emojiImg from "@images/main-character.webp";
import trunkImg from "@images/plank.webp";

const Home = () => {
  const data = homeData;
  const { scrollY } = useScrollPosition();
  return (
    <main className="container-home">
      <HomeSection data={data[0]} load={true} />
      <HomeBox />
      <HomeSection data={data[1]} load={scrollY > 100 ? true : false} />
      <p>HRUBÝ NÁSTŘEL DOPLŇKOVÉ ANIMACE</p>
      <AnimationBox />
      <p>{scrollY}</p>
    </main>
  );
};

export default Home;
