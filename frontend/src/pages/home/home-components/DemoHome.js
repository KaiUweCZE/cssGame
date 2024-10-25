import React from "react";
import { mapBG } from "@/data/ImagesData";

const DemoHome = () => {
  return (
    <>
      <section className="home-section">
        <img src={mapBG} alt="map background" width={600} />
        <article>
          <h2>Building</h2>
          <p>
            Create challenges for other users using CSS rules and custom
            settings. You can also test your skills by trying levels designed by
            fellow users, providing a dynamic learning experience.
          </p>
        </article>
      </section>
      <section className="home-section even">
        <img src={mapBG} alt="map background" width={600} />
        <article>
          <h2>Building</h2>
          <p>
            Create challenges for other users using CSS rules and custom
            settings. You can also test your skills by trying levels designed by
            fellow users, providing a dynamic learning experience.
          </p>
        </article>
      </section>
    </>
  );
};

export default DemoHome;
