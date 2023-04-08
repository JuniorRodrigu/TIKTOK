import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import {collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnepshot = await getDocs(videosCollection);
    const videosList = videosSnepshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }
  
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likrs={item.likrs}
              messagens={item.messagens}
              shares={item.shares}
              name={item.name}
              descriptions={item.descriptions}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
