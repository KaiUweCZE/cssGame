import React, { useContext, useState } from "react";
import bugIcon from "@images/icons/bug.svg";
import { useCreateMessage } from "@utils/queries/useCreateMessage";
import { UserContext } from "@contexts/UserContext";

const BugMessage = () => {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");
  const { user } = useContext(UserContext);
  const { handleCreateMessage, messageData, messageError, messageLoading } =
    useCreateMessage();

  const handleSend = async (e) => {
    e.preventDefault();
    if (!user.id) {
      alert("You must be logged in to send a message.");
      return;
    }
    try {
      await handleCreateMessage(user.id, text);
      setText(""); // Reset text field
      setActive(false); // Optionally close the form
      alert("Message sent successfully.");
    } catch (error) {
      alert("Failed to send message.");
    }
  };
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
          <form className="bug-form" onSubmit={handleSend}>
            <textarea
              name=""
              id=""
              onChange={(e) => setText(e.target.value)}
            ></textarea>
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
