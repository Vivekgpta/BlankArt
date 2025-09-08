import React from 'react'

const Video = () => {
  return (
    <div>
          <div className="lg:h-[450px] h-[280px] w-full fixed">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted

        src="src\assets\video1.mp4"
      ></video>
    </div>
    </div>
  )
}

export default Video
