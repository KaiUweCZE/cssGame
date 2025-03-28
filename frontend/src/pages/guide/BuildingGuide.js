import React from "react";
import buildingModeScreen from "@images/guide/building-mode.webp";

const BuildingGuide = () => {
  return (
    <section>
      <h2 className="section-title">Building Mode</h2>

      <p className="intro-text">
        Want to create your own level? Building mode allows you to design and
        share your own CSS challenges!
      </p>

      <figure className="screenshot-container">
        <img
          src={buildingModeScreen}
          alt="Building mode in CSS Bridge"
          className="screenshot"
        />
        <figcaption className="screenshot-caption">
          Editor for creating custom levels. On the left are forms for setting
          default CSS properties, limiting the number of inputs, and defining
          forbidden properties. On the right are forms for validating the
          solvability of the level with an alternative solution.
        </figcaption>
      </figure>

      <article className="info-box">
        <h3 className="subsection-title">Why create custom levels?</h3>
        <p className="mb-2">
          By creating levels, you'll deepen your CSS knowledge even further. You
          must understand well how CSS properties work and interact together.
          Plus, other players can play your creation!
        </p>
      </article>

      <section className="section-container space-y-8">
        <article className="feature-card">
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

      <article className="tip-box">
        <h3 className="tip-title">Tips for creating interesting levels</h3>
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

/*
    <article className="feature-card">
          <h3 className="subsection-title">Proces vytváření úrovně</h3>
          <ol className="numbered-list space-y-4">
            <li>
              <span className="font-medium">Nastavení výchozích stylů</span> -
              definuj počáteční CSS vlastnosti pro most a kontejner
            </li>
            <li>
              <span className="font-medium">Určení počtu inputů</span> - zvol
              počet vstupních polí (1-4) dostupných uživatelům
            </li>
            <li>
              <span className="font-medium">Nastavení omezení</span> - definuj,
              které CSS vlastnosti budou zakázané nebo povolené
            </li>
            <li>
              <span className="font-medium">Validace řešitelnosti</span> -
              dokaz, že úroveň lze dokončit pomocí validačních formulářů
            </li>
            <li>
              <span className="font-medium">Uložení úrovně</span> - po úspěšné
              validaci je úroveň uložena a zpřístupněna ostatním
            </li>
          </ol>
        </article> 
  
  <section className="info-box-large">
        <h3 className="subsection-title">Klíčové prvky Building mode</h3>

        <div className="space-y-6">
          <article>
            <h4 className="feature-title">1. Validace řešitelnosti</h4>
            <p>
              Před uložením úrovně musíš dokázat, že je řešitelná. To zajišťuje,
              že všechny publikované úrovně jsou skutečně hratelné. Systém ti
              poskytuje dva formuláře vedle editoru, kde můžeš předvést řešení
              úrovně při definovaných omezeních.
            </p>
          </article>

          <article>
            <h4 className="feature-title">2. Systém omezení CSS vlastností</h4>
            <p>Můžeš nastavit dva typy omezení pro CSS vlastnosti:</p>
            <ul className="feature-list space-y-2">
              <li>
                <span className="font-medium">Denied list</span> - definuje
                seznam zakázaných CSS vlastností (například zakázání{" "}
                <code>display</code> pro procvičení práce s existujícím
                layoutem)
              </li>
              <li>
                <span className="font-medium">Allowed list</span> - omezuje
                dostupné CSS vlastnosti pouze na ty, které jsou v seznamu
                (užitečné pro zaměření úrovně na konkrétní CSS koncept)
              </li>
            </ul>
          </article>

          <article>
            <h4 className="feature-title">3. Okamžitý náhled</h4>
            <p>
              Editor poskytuje okamžitou vizuální zpětnou vazbu toho, jak bude
              úroveň vypadat. To ti pomáhá iterativně upravovat a zdokonalovat
              návrh úrovně.
            </p>
          </article>
        </div>
      </section> */
