import React, { createContext, useContext, useState, useEffect, useRef } from "react";

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children, songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio());
  const isRepeatRef = useRef(false);

  const currentSong = currentSongIndex !== null ? songs[currentSongIndex] : null;

  useEffect(() => {
    const audio = audioRef.current;
    
    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      if (isRepeatRef.current) {
        audio.currentTime = 0;
        audio.play().catch(err => console.error("Replay error:", err));
      } else {
        playNext();
      }
    };


    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongIndex, songs]);

  const playSong = (index) => {
    if (currentSongIndex === index) {
      togglePlay();
      return;
    }

    const song = songs[index];
    const audio = audioRef.current;
    
    audio.src = song.filePath;
    audio.play()
      .then(() => {
        setIsPlaying(true);
        setCurrentSongIndex(index);
      }) 
      .catch(error => console.error("Error playing audio:", error));
  };

  const togglePlay = () => {
    if (currentSongIndex === null) {
      if (songs.length > 0) playSong(0);
      return;
    }
    
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(err => console.error("Playback error:", err));
      setIsPlaying(true);
    }
  };


  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const toggleShuffle = () => setIsShuffle(!isShuffle);
  const toggleRepeat = () => {
    const newVal = !isRepeat;
    setIsRepeat(newVal);
    isRepeatRef.current = newVal;
  };

  const playNext = () => {
    if (songs.length === 0) return;
    
    if (currentSongIndex === null) {
      playSong(0);
      return;
    }

    if (isShuffle) {
      const nextIndex = Math.floor(Math.random() * songs.length);
      playSong(nextIndex);
    } else {
      const nextIndex = (currentSongIndex + 1) % songs.length;
      playSong(nextIndex);
    }
  };

  const playPrevious = () => {
    if (songs.length === 0) return;
    if (currentSongIndex === null) {
      playSong(songs.length - 1);
      return;
    }
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(prevIndex);
  };



  const seek = (newProgress) => {
    const audio = audioRef.current;
    if (audio.duration) {
      const newTime = (newProgress / 100) * audio.duration;
      audio.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  const [volume, setVolumeState] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const setVolume = (newVolume) => {
    const vol = Math.max(0, Math.min(1, newVolume));
    audioRef.current.volume = vol;
    setVolumeState(vol);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger shortcuts if user is typing in an input or textarea
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      const audio = audioRef.current;
      
      // Keys only work if a song is selected/playing
      if (currentSongIndex === null) return;

      switch (e.key) {
        case " ":
          e.preventDefault();
          togglePlay();
          break;
        case "ArrowUp":
          e.preventDefault();
          setVolume(volume + 0.1);
          break;
        case "ArrowDown":
          e.preventDefault();
          setVolume(volume - 0.1);
          break;
        case "ArrowRight":
          e.preventDefault();
          if (e.ctrlKey) {
            playNext();
          } else if (audio.duration) {
            audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
          }
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (e.ctrlKey) {
            playPrevious();
          } else if (audio.duration) {
            audio.currentTime = Math.max(0, audio.currentTime - 5);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, currentSongIndex, volume, songs, isShuffle, isRepeat]);

  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        progress,
        volume,
        playSong,
        togglePlay,
        playNext,
        playPrevious,
        seek,
        setVolume,
        currentSongIndex,
        isShuffle,
        isRepeat,
        toggleShuffle,
        toggleRepeat,
        searchQuery,
        setSearchQuery,
        filteredSongs
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};



