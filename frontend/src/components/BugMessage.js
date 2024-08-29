import React, { useContext, useState } from "react";
import bugIcon from "@images/icons/bug.svg";
import { useCreateMessage } from "@utils/queries/useCreateMessage";
import { UserContext } from "@contexts/UserContext";
import uploadImg from "@images/icons/upload.webp";
import reportImg from "@images/icons/report.webp";

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
            <h2>Share Bugs</h2>
          </article>
          <form className="bug-form">
            <div className="bug-form-box">
              <label htmlFor="">Subject:</label>
              <input type="text" name="" id="" />
            </div>
            <div className="bug-form-box">
              <label htmlFor="">Screenshots:</label>
              <label htmlFor="images" className="bug-form-button">
                <img src={uploadImg} width={20} height={20} />
                <span>Upload</span>
              </label>
              <input
                type="file"
                id="images"
                name="images"
                accept=".webp"
                multiple
                required
              />
            </div>

            <textarea
              name=""
              id=""
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className="bug-form-button" onClick={handleSend}>
              <img src={reportImg} width={20} height={20} /> <span>Report</span>
            </button>
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
