import React from "react";
import buildingModeScreen from "@images/guide/building-mode.webp";

const BuildingGuide = () => {
  return (
    <section>
      <h2 className="section-title">Building Mode</h2>

      <p className="guide-intro-text">
        Want to create your own level? Building mode allows you to design and
        share your own CSS challenges!
      </p>

      <figure className="guide-screenshot-container">
        <img
          src={buildingModeScreen}
          alt="Building mode in CSS Bridge"
          className="guide-screenshot"
        />
        <figcaption className="screenshot-caption">
          Editor for creating custom levels. On the left are forms for setting
          default CSS properties, limiting the number of inputs, and defining
          forbidden properties. On the right are forms for validating the
          solvability of the level with an alternative solution.
        </figcaption>
      </figure>

      <article className="guide-info-box">
        <h3 className="subsection-title">Why create custom levels?</h3>
        <p className="mb-2">
          By creating levels, you'll deepen your CSS knowledge even further. You
          must understand well how CSS properties work and interact together.
          Plus, other players can play your creation!
        </p>
      </article>

      <section className="section-container space-y-8">
        <article className="guide-feature-card">
          <h3 className="subsection-title">How to do it</h3>
          <p className="mb-4">
            The level editor provides a comprehensive interface with the
            following elements:
          </p>
          <ul className="feature-list space-y-3">
            <li>
              <span className="font-medium">Setting default styles</span> - For
              .bridge and .container elements, you can set initial CSS
              properties
            </li>
            <li>
              <span className="font-medium">
                Determining the number of inputs
              </span>{" "}
              - Decide how many input fields (1-4) players will have available
              for solving
            </li>
            <li>
              <span className="font-medium">
                Defining allowed/denied CSS properties
              </span>{" "}
              - You can set which CSS properties will be forbidden or allowed
            </li>
            <li>
              <span className="font-medium">Preview area</span> - Immediately
              see how your level will look
            </li>
            <li>
              <span className="font-medium">Verifying solvability</span> -
              Before saving your level, you must prove that it's solvable
            </li>
          </ul>
        </article>
      </section>

  
      <article className="guide-tip-box">
        <h3 className="guide-tip-title">
          Tips for creating interesting levels
        </h3>
        <p className="mb-3">
          The most interesting levels often combine limitations with creative
          freedom. Instead of forcing users to find a single correct solution,
          try designing a level where multiple solution paths exist, while still
          requiring the user to understand a key CSS concept.
        </p>
        <p>
          Example: Set the default bridge with <code>display: flex</code> and{" "}
          <code>align-items: center</code>, but forbid the{" "}
          <code>align-items</code> property. The user will have to find an
          alternative solution, such as using{" "}
          <code>flex-direction: column</code> and <code>justify-content</code>.
        </p>
      </article>
    </section>
  );
};

export default BuildingGuide;
