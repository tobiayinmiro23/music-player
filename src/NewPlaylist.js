import React,{useState} from 'react'
import './NewPlaylist.css'
import {IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const NewPlaylist = ({page,DarkMode,handlePlaylist}) => {
  const [playlistName, setplaylistName] = useState([])
  
// function to get list of playlists
  const forPlaylist=(e)=>{
      handlePlaylist((a) => [...a, playlistName])
      setplaylistName('')
      page('playlists')
  }
  return (
    <div className={DarkMode ? 'NewPlaylistDark' : 'NewPlaylist'}>
        <nav >
            <div className="img" onClick={()=>page('playlists')}>
                {
                    DarkMode ?
                    <IconButton>
                        <ArrowBackIcon className='white'/>
                     </IconButton>
                    :
                    <IconButton>
                        <ArrowBackIcon className='black'/>
                    </IconButton>
                }
            </div> 
            <h1>New Playlist</h1>
        </nav>
        <div className="NewPlaylistWrapper">
            <h2>Create new playlist</h2>
            <p>Title</p>
            {/* <form action=""> */}
            <input type="text"  onInput={(e)=>setplaylistName(e.target.value)} value={playlistName} name="" id="" />
            <div className="playlistBtn">
                <h4 onClick={forPlaylist}>Create</h4>
                <h4 onClick={()=>page('playlists')}>Cancel</h4>
            </div>
            {/* </form> */}
        </div>
    </div>
  )
}

export default NewPlaylist