import React, { useRef } from 'react';

const Media = () => {
 
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };


  return (
    <div className="relative p-5 bg-slate-700  flex justify-center align-center">
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls
        className="w-full max-w-screen-lg h-auto"
      >
        Your browser does not support the video tag.
      </video>

        <button onClick={togglePlayPause} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 max-w-xs">
        {videoRef.current && videoRef.current.paused ? "Play" : "Pause"}
      </button>

      <div className="absolute top-28 left-0 w-full text-black text-bold text-center mt-4">
        <div className='max-w-screen'>
          <h5 className='text-2xl'>DELL TECHNOLOGIES + MEMORIES</h5>
          <h1 className='text-5xl text-bold mt-3' >Creating More Equal Ocean Access</h1>
          <p className='text-xl mt-5'>Technology gives freediver and ocean freedom to grow The Black Mermaid Foundation  where everyone belongd.</p>

          <p className='text-3xl mt-8'>View more Stories</p>
        </div>
      </div>
    </div>
  );
};

export default Media;
