import React from "react";
import videoIcon from "@images/icons/youtube.svg";
import { Link } from "react-router-dom";

const TipSection = ({ tip, video }) => {
  const { img } = tip;

  return (
    <section className="dernier">
      <article className="tip-article">
        <span>
          <img
            className="tip-icon"
            src={videoIcon}
            alt="Video tutorial icon"
            loading="lazy"
          />
          <h3>Video</h3>
        </span>
        <div className="academy-tip">
          <p>{video.text}</p>
          <Link to={video.src} className="academy-link">
            To the video
          </Link>
        </div>
      </article>

      <article className="tip-article">
        <span>
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10 19.5H14M10.6667 22H13.3333"
                stroke="#297883"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M7.41058 13.6805L8.51463 14.7196C8.82437 15.0112 9 15.4177 9 15.843C9 16.482 9.518 17 10.157 17H13.843C14.482 17 15 16.482 15 15.843C15 15.4177 15.1756 15.0112 15.4854 14.7196L16.5894 13.6805C18.1306 12.2187 18.9912 10.2984 18.9999 8.30193L19 8.21807C19 4.8069 15.866 2 12 2C8.13401 2 5 4.8069 5 8.21807L5.00007 8.30193C5.00875 10.2984 5.86939 12.2187 7.41058 13.6805Z"
                stroke="#297883"
                stroke-width="1.5"
              ></path>{" "}
            </g>
          </svg>
          <h3>{tip.title}</h3>
        </span>
        <div className="academy-tip">
          <p>{tip.text}</p>
          <Link to={img.href} className="academy-link">
            To Tool
          </Link>
        </div>
      </article>
    </section>
  );
};

export default TipSection;
