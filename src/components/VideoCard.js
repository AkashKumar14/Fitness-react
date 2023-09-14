import React from 'react';
import './VideoCard.css';

const VideoCard = ({ videoData }) => {
  if (!videoData) {
    return null;
  }

  return (
    <div className="video-card">
      <iframe src={videoData.video} title={videoData.heading} />
      <h2 className="video-title">{videoData.heading}</h2>
      <div className="tags">
        {videoData.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;
