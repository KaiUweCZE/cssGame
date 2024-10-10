import React, { useState } from "react";
import "./home-style.css";
import useScrollPosition from "@utils/hooks/useScrollPosition";
import HomeIntrodaction from "./home-components/HomeIntrodaction";

const Home = () => {
  const { scrollY } = useScrollPosition();

  return (
    <main className="container-home">
      <HomeIntrodaction />
    </main>
  );
};

export default Home;
