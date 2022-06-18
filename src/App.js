import './App.css';
import React, { useState } from 'react'
// import { useState } from 'react/cjs/react.production.min';
import HomePage from './HomePage';
import PlayList from './PlayList';
import Search from './Search';
import Songs from './Songs';
import NowPlaying from './NowPlaying';
import NewPlaylist from './NewPlaylist';

function App() {
  const [nowPlaying, setnowPlaying] = useState({})
  const [page, setpage] = useState('home')
  const [DarkMode, setDarkMode] = useState(false)
  const [playlists, setplaylists] = useState([])

  // function to get currently playing song
  const handleNowPlaying = (info) => {
    setnowPlaying(info)
  }
  // function to switch dark mode on and off
  const handleDarkMode = (info) => {
    setDarkMode(info)
  }
  // function to change the components being rendered
  const handlePage = (info) => {
    setpage(info)
  }
  // function for getting the names of playlists 
  const handlePlaylist = (info) => {
    setplaylists(info)
  }
  return (
    <div className="App">
      <div className={DarkMode ? "containerDark" : "container"}>
        {page === 'home' && <HomePage page={handlePage} DarkMode={DarkMode} handleDarkMode={handleDarkMode} />}
        {page === 'songs' && <Songs page={handlePage} DarkMode={DarkMode} nowPlaying={handleNowPlaying} playlists={playlists} />}
        {page === 'playlists' && <PlayList page={handlePage} DarkMode={DarkMode} playlists={playlists} />}
        {page === 'newPlaylist' && <NewPlaylist page={handlePage} DarkMode={DarkMode} handlePlaylist={handlePlaylist} />}
        {page === 'search' && <Search nowPlaying={handleNowPlaying} page={handlePage} DarkMode={DarkMode} />}
        {page === 'nowPlaying' && <NowPlaying page={handlePage} DarkMode={DarkMode} musicInfo={nowPlaying} playlists={playlists}/>}
      </div>
    </div>
  );
}

export default App;
