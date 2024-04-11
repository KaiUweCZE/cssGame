import React from "react";
import HomeSection from "./home-components/HomeSection";
import "./home-style.css";
import { homeData } from "./data";
import HomeBox from "./home-components/HomeBox";
import useScrollPosition from "@utils/hooks/useScrollPosition";
import AnimationBox from "./home-components/AnimationBox";

const Home = () => {
  const data = homeData;
  const { scrollY } = useScrollPosition();
  return (
    <main className="container-home">
      <HomeSection data={data[0]} load={true} />
      <HomeBox />
      <HomeSection data={data[1]} load={scrollY > 100 ? true : false} />
      <AnimationBox />
      <p>{scrollY}</p>
      <div className="px800"></div>
    </main>
  );
};

export default Home;
