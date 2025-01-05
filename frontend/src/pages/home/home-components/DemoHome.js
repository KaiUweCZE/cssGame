import React from "react";
import { mapBG,  } from "@/data/ImagesData";
import { homeIntro } from "../data";

const DemoHome = () => {
  return (
    <>
      <section className="home-section">
        <img src={homeIntro[0].img} alt="map background" width={600} />
        <article>
          <h2>Map</h2>
          <p>
          After registration, you'll gain access to the game. The main feature is a campaign where each level 
          presents a new challenge. If you need assistance, 
          the academy provides all the necessary information to successfully complete your tasks.
          </p>
        </article>
      </section>
      <section className="home-section even">
        <img src={homeIntro[1].img} alt="map background" width={600} />
        <article>
          <h2>Game</h2>
          <p>
          In the game, you'll be able to style up to three elements. Essential information about .bridge and .container 
          can be found under the magnifying glass icon. If you're unsure, don't hesitate to ask your guide 
          for help using the 'help' button - they'll always try to point you in the right direction.
          </p>
        </article>
      </section>

      <section className="home-section ">
        <img src={homeIntro[2].img} alt="map background" width={600} />
        <article>
          <h2>Academy</h2>
          <p>
          The academy houses all the materials, tips, and information you'll need. You'll gradually unlock access to 
          articles, CSS videos, and useful applications that you can leverage in your projects.
          </p>
        </article>
      </section>  <section className="home-section even">
        <img src={homeIntro[3].img} alt="map background" width={600} />
        <article>
          <h2>Building</h2>
          <p>
          Create challenges for other users using CSS rules and custom settings. You can also test your 
          skills by trying levels designed by fellow users, providing a dynamic learning experience.
          </p>
        </article>
      </section>
    </>
  );
};

export default DemoHome;
