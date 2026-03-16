import React from "react";
import { usePlayer } from "../context/PlayerContext";
import "../styles/SongItem.css";

function SongItem(props) {
  const { playSong, isPlaying, currentSongIndex } = usePlayer();
  
  const isThisSongPlaying = isPlaying && currentSongIndex === props.index;

  return (
    <div className="song-card" onClick={() => playSong(props.index)}>
      <div className="image-container">
        <img src={props.coverPath} alt={props.title} />
        <div className={`overlay ${isThisSongPlaying ? "active" : ""}`}>
          <i className={`fa-solid fa-${isThisSongPlaying ? "pause" : "play"}`}></i>
        </div>
      </div>
      <div className="card-info">
        <div className="song-title">{props.title}</div>
        <div className="song-artist">{props.artist}</div>
      </div>
    </div>
  );
}


export default SongItem;

