import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({name,descriptions,music, url}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{name}</h3>
        <p>{descriptions}</p>
        <div className="videoFooter__misic">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>{music}</p>
          </div>

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
