import React, { useState, useEffect } from "react";
import SongItem from "../components/SongItem";
import { usePlayer } from "../context/PlayerContext";
import songs from "../assets/songs";
import "../styles/Library.css";

const SONGS_PER_PAGE = 8;

export default function Library() {
  const { filteredSongs, searchQuery } = usePlayer();
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredSongs.length / SONGS_PER_PAGE);
  const indexOfLastSong = currentPage * SONGS_PER_PAGE;
  const indexOfFirstSong = indexOfLastSong - SONGS_PER_PAGE;
  const currentSongs = filteredSongs.slice(indexOfFirstSong, indexOfLastSong);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of list container
    document.querySelector('.library')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="library">
      <div className="container">
        <h1>{filteredSongs.length > 0 ? "Favourites" : "No results found"}</h1>
        
        <div className="listContainer">
          {currentSongs.map((song) => {
            const originalIndex = songs.findIndex(s => s.filePath === song.filePath);
            return (
              <SongItem
                key={originalIndex}
                index={originalIndex}
                title={song.title}
                artist={song.artist}
                filePath={song.filePath}
                coverPath={song.coverPath}
              />
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className="page-btn-icon" 
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="page-numbers">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`page-number ${currentPage === i + 1 ? "active" : ""}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              className="page-btn-icon" 
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}



