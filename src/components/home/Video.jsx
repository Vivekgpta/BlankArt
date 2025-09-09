import React from 'react'

const Video = () => {
  return (
    <div>
          <div className="lg:h-[450px] h-[280px] w-full fixed">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted

        src="https://cdn.pixabay.com/video/2021/10/06/91069-628462649_large.mp4"
      ></video>
    </div>
    </div>
  )
}

export default Video

