import { useState } from "react";
import "../styles/Bottom.css";

const BottomStrip = ({progress}) => {



  return (
    <div className="bottomStrip">
      <div className="center-items">
        <input type="range" name="range" id="progressBar" value={progress} min="0" max="100"/>
        <span id="songName">Song Names</span>
        <div className="lower">
          <div className="icon">
            <i className="fa-solid fa-2x fa-shuffle"></i>
            <i className="fa-solid fa-2x fa-backward-step"></i>
            <i className="fa-solid fa-2x fa-circle-play" id="masterPlay"></i>
            <i className="fa-solid fa-2x fa-forward-step"></i>
            <i className="fa-solid fa-2x fa-repeat"></i>
          </div>

          <div id="volumeControl">
            <i
              className="fa-solid fa-volume-down"
              id="volumeDown"
              style={{ display: "none" }} //remove this later
            ></i>
            <i className="fa-solid fa-volume-up" id="volumeUp"></i>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value="0.5"
              id="volumeSlider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomStrip;
