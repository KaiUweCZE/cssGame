import React from "react";
import notFoundImage from "@/assets/images/not-found.webp";

const ErrorPage = () => {
  return (
    <main className="error-container">
      <img
        src={notFoundImage}
        alt="not found image, back to home page"
        width={1600}
        className="error-image"
      />
    </main>
  );
};

export default ErrorPage;
