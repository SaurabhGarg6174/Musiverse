import React from "react";
import { usePlayer } from "../context/PlayerContext";
import "../styles/Bottom.css";

const BottomStrip = () => {
  const {
    currentSong,
    isPlaying,
    progress,
    togglePlay,
    playNext,
    playPrevious,
    isShuffle,
    isRepeat,
    toggleShuffle,
    toggleRepeat,
    seek,
    setVolume,
    volume,
  } = usePlayer();


  return (
    <div className="bottomStrip">
      <div className="player-left">
        {currentSong && (
          <>
            <img src={currentSong.coverPath} alt={currentSong.title} className="current-song-cover" />
            <div className="song-details">
              <div className="song-title">{currentSong.title}</div>
              <div className="song-artist">{currentSong.artist}</div>
            </div>
          </>
        )}
      </div>

      <div className="player-center">
        <div className="playback-icons">
          <i
            className="fa-solid fa-shuffle"
            style={{ color: isShuffle ? "var(--accent-primary)" : "var(--text-muted)" }}
            onClick={toggleShuffle}
          ></i>
          <i className="fa-solid fa-backward-step" onClick={playPrevious}></i>
          <div className="play-pause-btn" onClick={togglePlay}>
            <i className={`fa-solid fa-${isPlaying ? "pause" : "play"}`}></i>
          </div>
          <i className="fa-solid fa-forward-step" onClick={playNext}></i>
          <i
            className="fa-solid fa-repeat"
            style={{ color: isRepeat ? "var(--accent-primary)" : "var(--text-muted)" }}
            onClick={toggleRepeat}
          ></i>
        </div>
        <div className="progress-bar-container">
          <input
            type="range"
            name="range"
            id="progressBar"
            value={progress}
            min="0"
            max={100}
            onChange={(e) => seek(parseFloat(e.target.value))}
            style={{ backgroundSize: `${progress}% 100%` }}
          />
        </div>
      </div>

      <div className="player-right">
        <div className="volume-wrapper">
          <i className="fa-solid fa-volume-low"></i>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            id="volumeSlider"
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            style={{ backgroundSize: `${volume * 100}% 100%` }}
          />
          <i className="fa-solid fa-volume-high"></i>
        </div>
      </div>

    </div>
  );
};


export default BottomStrip;

