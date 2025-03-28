import React from "react";
import gameModeScreen from "@images/guide/game-mode.webp";

const GameGuide = () => {
  return (
    <section>
      <h2 className="section-title">Game Mode</h2>

      <p className="intro-text">
        Welcome to CSS Game! This game allows you to practice and improve your
        CSS skills. The goal is to get the emoji character across the water
        obstacle by modifying the CSS properties of the bridge.
      </p>

      <figure className="screenshot-container">
        <img
          src={gameModeScreen}
          alt="Herní prostředí CSS Bridge"
          className="screenshot"
        />
        <figcaption className="screenshot-caption">
          Game environment with an emoji character, water obstacle, and a bridge
          made of three parts. At the top, you can see forms for modifying CSS
          properties. In the top right corner is an inspection tool (magnifying
          glass) showing the current CSS properties of the bridge.
        </figcaption>
      </figure>

      <article className="info-box">
        <h3 className="subsection-title">How does the game work?</h3>
        <p className="mb-4">
          Each level presents a new challenge with different CSS concepts. Using
          the forms at the top of the screen, you modify CSS properties. The
          emoji character needs to cross from one side to the other, and it's up
          to you to figure out how to get it there!
        </p>
      </article>

      <section className="two-column-grid">
        <article className="feature-card">
          <h3 className="subsection-title">
            What do you find in the game mode?
          </h3>
          <ul className="feature-list space-y-3">
            <li>
              <span className="font-medium">Visualization area</span> - The main
              part of the screen where you see the emoji character, water
              obstacle, and bridge
            </li>
            <li>
              <span className="font-medium">Form system</span> - Allows you to
              modify:
              <ul className="sub-list space-y-2">
                <li>
                  The <code>.bridge</code> form for the bridge as a whole
                </li>
                <li>
                  The <code>.container</code> form for modifying the container
                  in which the bridge is placed
                </li>
                <li>
                  The <code>.parts</code> form for modifying individual parts of
                  the bridge (in more advanced levels)
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Magnifying glass</span> - A useful
              tool in the top right corner that shows you the current CSS
              properties
            </li>
            <li>
              <span className="font-medium">Help</span> - If you're stuck,
              there's always a help button available
            </li>
          </ul>
        </article>

        <article className="feature-card">
          <h3 className="subsection-title">CSS Concepts</h3>
          <p className="mb-4">
            Během hry se postupně setkáš s různými CSS vlastnostmi včetně:
          </p>
          <p className="mb-4">
            Throughout the game, you'll encounter various CSS properties
            including:
          </p>
          <ul className="feature-list space-y-3">
            <li>
              <span className="font-medium">Positioning</span> - position:
              absolute, relative, static, fixed, sticky
            </li>
            <li>
              <span className="font-medium">Flexbox</span> - flex-direction,
              justify-content, align-items
            </li>
            <li>
              <span className="font-medium">Grid</span> - grid-template-columns,
              grid-area, grid-row, grid-column
            </li>
            <li>
              <span className="font-medium">Spacing</span> - margin, padding
            </li>
            <li>
              <span className="font-medium">Transformation</span> - rotate,
              translate, scale
            </li>
            <li>
              <span className="font-medium">Visibility</span> - overflow,
              display, opacity
            </li>
          </ul>
        </article>
      </section>

      <section className="info-box-large">
        <h3 className="subsection-title">Game Mechanics</h3>

        <section className="space-y-6">
          <article>
            <h4 className="feature-title">1. Validation System</h4>
            <p>
              The game automatically checks whether the bridge spans the water
              obstacle and connects the starting and ending points. In more
              complex levels with multiple bridge parts, validation is performed
              for each part separately.
            </p>
          </article>

          <article>
            <h4 className="feature-title">2. Multiple Solutions</h4>
            <p>Most levels have multiple ways to solve them - be creative!</p>
          </article>

          <article>
            <h4 className="feature-title">3. Some Limitations</h4>
            <p>
              Some levels may have certain CSS properties forbidden, which
              forces you to find alternative solutions and deepen your knowledge
            </p>
          </article>
        </section>
      </section>

      {/* <article className="tip-box">
        <h3 className="tip-title">Tip</h3>
        <p>
          V některých úrovních existuje více způsobů, jak dosáhnout řešení.
          Experimentuj s různými CSS vlastnostmi a přístupy - často můžeš
          objevit alternativní řešení, která jsou elegantní nebo efektivní!
        </p>
      </article> */}
    </section>
  );
};

export default GameGuide;
