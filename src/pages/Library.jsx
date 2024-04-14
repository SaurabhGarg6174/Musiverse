// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
{/* <Sidebar /> */}
{/* <Navbar /> */}

import SongItem from "../components/SongItem";
import data from "../assets/songs";
import "../styles/Library.css";

export default function Library({progressUpdater}) {
  return (
    <div className="library">
      <div className="container">
        <h1>Favourites</h1>
        <div className="listContainer">
          {data.map((song, index) => (
            <SongItem
              progressUpdater={progressUpdater}
              key={index}
              title={song.title}
              artist={song.artist}
              filePath={song.filePath}
              coverPath={song.coverPath}
              songs={data}
            />
          ))}
          {/* <div>{data.length}</div> */}
        </div>
      </div>
    </div>
  );
}
