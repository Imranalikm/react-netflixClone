import React from 'react';
import Youtube from 'react-youtube';

function YoutubeModal({ isOpen, videoId, onClose }) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={`youtube-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <Youtube opts={opts} videoId={videoId} />
      </div>
    </div>
  );
}

export default YoutubeModal;