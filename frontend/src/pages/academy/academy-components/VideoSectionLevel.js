import React from "react";

const VideoSectionLevel = ({ data }) => {
  return (
    <>
      {data.videoSection?.src ? (
        <section className="level-section video-section">
          <article>
            <h3>Video</h3>
            <p>{data.videoSection?.text}</p>
          </article>
          <iframe
            width="560"
            height="315"
            src={data.videoSection?.src}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default VideoSectionLevel;
