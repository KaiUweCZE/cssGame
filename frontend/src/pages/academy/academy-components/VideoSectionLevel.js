import React from "react";

const VideoSectionLevel = ({ data }) => {
  return (
    <>
      {data.fullData.videoSection?.src ? (
        <section className="video__section">
          <article>
            <h3>Video</h3>
            <p>{data.fullData.videoSection?.text}</p>
          </article>
          <iframe
            width="560"
            height="315"
            src={data.fullData.videoSection?.src}
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
