import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
function VideoFooter() {
  return (
    <div className="videofooter">
      <div className="videoFoorer__text">
        <h3>@junior</h3>
        <p>Discriçao do video</p>
        <div className="videoFooter__music">
        <MusicNoteIcon/>
        <p>Titulo da musica</p>
        </div>
      </div>
      <img
      className="videoFooetr__record"
      alt="Imagem de um vinil girando"
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
