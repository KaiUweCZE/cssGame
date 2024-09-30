import React, { useContext, useState } from "react";
import bugIcon from "@images/icons/bug.svg";
import { useCreateMessage } from "@utils/queries/useCreateMessage";
import { UserContext } from "@contexts/UserContext";
import uploadImg from "@images/icons/upload.webp";
import reportImg from "@images/icons/report.webp";
import binImg from "@images/icons/bin.png";
import { Image, Transformation } from "cloudinary-react";
import { cld, cloudinaryConfig } from "@/utils/cloudinaryClient";

const BugMessage = () => {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const { user } = useContext(UserContext);
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
      console.log("Message sent successfully.", uploadedImages, imageUrls);
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
        console.log("error in editing", validFiles, files);

        setError("Some of uplloaded images are not in valid format");
      } else {
        console.log("uploading was succesfful");

        setReportedImages((images) => [...images, ...validFiles]);
      }
    }
  };

  const removeImage = (index) => {
    setReportedImages((prevImages) => prevImages.filter((_, i) => i !== index));
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
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => setSubject(e.target.value)}
              />
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
                accept=".webp, .png, .jpg, .jpeg"
                onChange={handleImageChange}
                multiple
                required
              />
            </div>
            {reportedImages.length > 0 && (
              <div className="files-box">
                <h3>Uploaded images:</h3>
                <ul className="file-list">
                  {reportedImages.map((image, index) => (
                    <li key={index} className="file">
                      <span>{image.name}</span>{" "}
                      <img
                        src={binImg}
                        alt="delete icon"
                        width={24}
                        height={24}
                        onClick={() => removeImage(index)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <textarea
              name=""
              id=""
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button
              className="bug-form-button"
              onClick={handleSend}
              disabled={isLoading}
            >
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
