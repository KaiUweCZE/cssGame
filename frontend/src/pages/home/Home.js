import React, { useState } from "react";
import "./home-style.css";
import useScrollPosition from "@utils/hooks/useScrollPosition";
import HomeIntrodaction from "./home-components/HomeIntrodaction";
import DemoHome from "./home-components/DemoHome";

const Home = () => {
  const { scrollY } = useScrollPosition();

  return (
    <main className="container-home">
      <HomeIntrodaction />
      {/*<DemoHome />*/}
    </main>
  );
};

export default Home;
