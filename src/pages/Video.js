import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";

function Video() {


  const videoRef = useRef(null)
  const [ play, setPlay ] = useState(false)

  function handdlsStast() {
    if (play) {
      videoRef.current.pause()
      setPlay(false)
    }else{
     videoRef.current.play()
      setPlay(true)
    }
  }
  return (
    <div className='video'>
      <video className='video__playar'
        ref={videoRef}
        onClick={handdlsStast}
        loop
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4">
      </video>
      <VideoFooter/>
    </div>

  )
}


export default Video;
