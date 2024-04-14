import React, { useState } from "react";
import bugIcon from "@images/icons/bug.svg";

const BugMessage = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      {active ? (
        <footer className={active ? "bug-message active" : "bug-message"}>
          <img
            className={active ? "bug-image active" : "bug-image"}
            src={bugIcon}
            alt="bug icon"
            onClick={() => setActive(!active)}
          />
          <article>
            <h2>Chyba?</h2>
            <p>Neváhejte ji sdílet: </p>
          </article>
          <form className="bug-form" action="">
            <textarea name="" id=""></textarea>
            <input type="submit" value="send" />
          </form>
        </footer>
      ) : (
        <footer className={active ? "bug-message active" : "bug-message"}>
          <img
            className={active ? "bug-image active" : "bug-image"}
            src={bugIcon}
            alt="bug icon"
            onClick={() => setActive(!active)}
          />
        </footer>
      )}
    </>
  );
};

export default BugMessage;
