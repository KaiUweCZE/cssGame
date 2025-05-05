import React, { useContext, useState } from "react";
import bugIcon from "@images/icons/bug.svg";
import { useCreateMessage } from "@utils/queries/useCreateMessage";
import { UserContext } from "@contexts/UserContext";
import binImg from "@images/icons/bin.png";
import { cld, cloudinaryConfig } from "@/utils/cloudinaryClient";
import { Send, Upload } from "lucide-react";

const BugMessage = () => {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const { user, login } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [reportedImages, setReportedImages] = useState([]);
  const { handleCreateMessage, messageData, messageError, messageLoading } =
    useCreateMessage();

  const handleSend = async (e) => {
    e.preventDefault();
    if (!user.id) {
      alert("You must be logged in to send a message.");
      return;
    }
    try {
      setIsLoading(true);
      const uploadedImages = await Promise.all(
        reportedImages.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", cloudinaryConfig.uploadPreset);
          formData.append("fetch_format", "auto");

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );

          if (!response.ok) {
            const errorText = await response.text();
            console.error("Upload error:", errorText);
            throw new Error(`Upload failed: ${errorText}`);
          }
          const data = await response.json();

          return {
            publicId: data.public_id,
            url: data.secure_url,
            name: file.name,
          };
        })
      );

      const imageUrls = uploadedImages.map((image) => image.url);

      await handleCreateMessage(user.id, text, subject, imageUrls);
      setText(""); // Reset text field
      setActive(false); // Optionally close the form
      alert("Message sent successfully.");
    } catch (error) {
      console.error("error: ", error);

      alert("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const validTypes = ["image/webp", "image/png", "image/jpeg", "image/jpg"];
      const validFiles = files.filter((file) => validTypes.includes(file.type));

      if (validFiles.length !== files.length) {
        setError("Some of uploaded images are not in valid format");
      } else if (reportedImages.length + validFiles.length > 4) {
        setError("Maximum 4 screenshots allowed");
      } else {
        setReportedImages((images) => [...images, ...validFiles]);
        setError("");
      }
    }
  };

  const removeImage = (index) => {
    setReportedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  return (
    <>
      {login && (
        <>
          {active ? (
            <footer
              className={active ? "bug-message active" : "bug-message"}
              role="complementary"
              aria-label="Bug Report Form"
            >
              <img
                className={active ? "bug-image active" : "bug-image"}
                src={bugIcon}
                alt="Close bug report form"
                onClick={() => setActive(!active)}
                role="button"
                tabIndex="0"
              />

              <h2 id="bug-form-title">Share Bugs</h2>

              <form className="bug-form" aria-labelledby="bug-form-title">
                <div className="bug-form-box">
                  <label htmlFor="bug-subject" className="bug-label">
                    Subject:
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="bug-subject"
                    onChange={(e) => setSubject(e.target.value)}
                    aria-required="true"
                    placeholder="Brief description of the issue"
                  />
                </div>
                <div className="bug-form-box">
                  <label htmlFor="bug-images" className="bug-label">
                    Screenshots: ({reportedImages.length}/4)
                  </label>
                  <label
                    htmlFor="bug-images"
                    className={`bug-form-button ${
                      reportedImages.length >= 4 ? "disabled" : ""
                    }`}
                    tabIndex={reportedImages.length >= 4 ? -1 : 0}
                  >
                    <Upload color="white" height={20} aria-hidden="true" />
                    <span>Upload Images</span>
                  </label>
                  <input
                    type="file"
                    id="bug-images"
                    name="images"
                    accept=".webp, .png, .jpg, .jpeg"
                    onChange={handleImageChange}
                    multiple
                    disabled={reportedImages.length >= 4}
                    aria-label="Upload screenshots"
                  />
                  {error && <div className="error-message">{error}</div>}
                </div>
                {reportedImages.length > 0 && (
                  <div className="files-box" aria-live="polite">
                    <ul className="file-list" aria-label="Uploaded images">
                      {reportedImages.map((image, index) => (
                        <li key={index} className="file">
                          <span title={image.name}>
                            {image.name.length > 12
                              ? "..." + image.name.slice(-12)
                              : image.name}
                          </span>{" "}
                          <img
                            src={binImg}
                            alt={`Remove ${image.name}`}
                            width={24}
                            height={24}
                            onClick={() => removeImage(index)}
                            role="button"
                            tabIndex="0"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bug-form-box-textarea">
                  <textarea
                    name="description"
                    id="bug-description"
                    onChange={(e) => setText(e.target.value)}
                    aria-label="Bug description"
                    placeholder="Describe the bug in detail"
                  ></textarea>
                  <button
                    className="bug-form-button"
                    onClick={handleSend}
                    disabled={isLoading}
                    aria-busy={isLoading}
                  >
                    <Send height={16} color="white" aria-hidden="true" />
                    <span>{isLoading ? "Sending..." : "Report"}</span>
                  </button>
                </div>
              </form>
            </footer>
          ) : (
            <footer className={active ? "bug-message active" : "bug-message"}>
              <img
                className={active ? "bug-image active" : "bug-image"}
                src={bugIcon}
                alt="Open bug report form"
                onClick={() => setActive(!active)}
                role="button"
                tabIndex="0"
              />
            </footer>
          )}
        </>
      )}
    </>
  );
};

export default BugMessage;
