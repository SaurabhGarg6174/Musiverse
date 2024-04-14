// import data from "../assets/songs";
import { useMemo, useState } from "react";
import "../styles/SongItem.css";

function SongItem(props) {
  const [isPlaying, setIsPlaying] = useState(false);
const [songIndex, setSongIndex] = useState(0)/*parseInt(props.key)*/;

  // const audioElement = useMemo(() => new Audio(song.filePath), [])
  const audioElement = useMemo(
    () => new Audio(props.filePath),
    [props.filePath]
  );

  // useEffect(() => {
  //   const handleTimeUpdate = () => {
  //     const currentTime = audioElement.currentTime;
  //     const duration = audioElement.duration;
  //     const progressPercent = (currentTime / duration) * 100;
  //     props.progressUpdater(progressPercent); // Update progress in parent component
  //   };

  //   audioElement.addEventListener("timeupdate", handleTimeUpdate);

  //   return () => {
  //     audioElement.removeEventListener("timeupdate", handleTimeUpdate);
  //   };
  // }, [audioElement, progressUpdater]);
  

  // Rest of the component

  const togglePlay = () => {
    if (audioElement.paused && audioElement.currentTime <= 0 /*!isPlaying*/) {
      audioElement.play();
      setIsPlaying(true);
    } else {
      audioElement.paused ? audioElement.play() : audioElement.pause();
      setIsPlaying(!audioElement.paused);
    }
  };

  // if(audioElement.ended) setIsPlaying(false);
  //play next song in the array
  if (audioElement && audioElement.ended) {
    const nextIndex = (songIndex + 1) % props.songs.length;
    setSongIndex(nextIndex);
    audioElement.currentTime = 0;
    audioElement.play();
    setIsPlaying(true);
  }

  return (
    <div className="songList">
      <div className="songItem" onClick={togglePlay}>
        <img src={props.coverPath} alt="___" />
        <br />
        <i
          className={`fa-solid fa-circle-${isPlaying ? "pause" : "play"}`}
        ></i>{" "}
        <span id="displayName">
          {props.title} - {props.artist}
        </span>
      </div>
    </div>
  );
}

export default SongItem;

//IMPLEMENT THE LOGIC FOR PLAYING SONGS HERE

// const playNext = () =>{
//   songIndex = (songIndex + 1) %
// }

// || audioElement.currentTime <= 0
