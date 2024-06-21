import React from "react";
import HomeSection from "./home-components/HomeSection";
import "./home-style.css";
import { homeData } from "./data";
import useScrollPosition from "@utils/hooks/useScrollPosition";
import HomeIntrodaction from "./home-components/HomeIntrodaction";

const Home = () => {
  const dataHome = homeData;
  const { scrollY } = useScrollPosition();
  return (
    <main className="container-home">
      {/*<HomeSection data={dataHome[0]} load={true} />
      <HomeSection data={dataHome[1]} load={scrollY > 100 ? true : false} />*/}
      <HomeIntrodaction />
    </main>
  );
};

export default Home;
