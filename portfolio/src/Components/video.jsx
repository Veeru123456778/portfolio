import React from 'react'
import video from "../assets/noBgVideo.mp4";
import { useRef } from 'react';

const Video = () => {

    const videoRef = useRef(null);

    const handleVideoClick = () => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    };

  return (
    <div>
          <video
        ref={videoRef}
        src={video}
        className="absolute inset-0 object-cover w-40 h-40"
        onClick={handleVideoClick} // Add click handler
        muted // Optionally mute the video
        loop // Loop the video if desired
        
      />
    </div>
  )
}

export default Video
