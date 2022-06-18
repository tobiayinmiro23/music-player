import React from 'react'
import  './PlayList.css'
import {IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

const PlayList = ({page,DarkMode,playlists}) => {
  return (
    <div className={DarkMode ? 'PlayListDark' : 'PlayList'}>
        <nav>
            <div className="img" onClick={()=>page('home')}>
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
            <h1>Playlist</h1>
        </nav>
        <main>
            <div className="AddPlaylist" onClick={()=>page('newPlaylist')}>
                <div className="addWrapper">
                    <div className="add">
                    {
                    DarkMode ?
                    <IconButton>
                            <AddIcon className='white'/>
                     </IconButton>
                    :
                    <IconButton>
                            <AddIcon className='black'/>
                    </IconButton>

                }
                    </div>
                </div>
                <h3>New Playlist</h3>
            </div>
            <div className="playlistsContainer">
            {playlists.map(item=>{
                return <div key={item}>
                        <div className="playlistSongs">
                            <div className="img"></div>
                            <h3>{item}</h3>
                        </div>
                    </div>
            })}
            </div>
        </main>
    </div>
  )
}

export default PlayList