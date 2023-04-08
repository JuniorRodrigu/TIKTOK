import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";

function Video({likrs, messagens, shares, name, descriptions, music, url}) {


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
        src={url}>
      </video>
      <VideoSidebar
       likrs={likrs}
       messagens={messagens} 
       shares={shares}/>
   
    <VideoFooter
    name={name}
    descriptions={descriptions}
    music={music}/>
    </div>
    
    

  )
}


export default Video;
