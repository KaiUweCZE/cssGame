import React, { useState } from "react";
import "./home-style.css";
import useScrollPosition from "@/hooks/useScrollPosition";
import HomeIntro from "./home-components/HomeIntro";
import DemoHome from "./home-components/DemoHome";

const Home = () => {
  const { scrollY } = useScrollPosition();

  return (
    <main className="container-home">
      <HomeIntro />
      {/* <DemoHome /> */}
    </main>
  );
};

export default Home;
