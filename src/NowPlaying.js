import React,{useState} from 'react'
import './NowPlaying.css'
import {IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import AddIcon from '@mui/icons-material/Add';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import { DarkMode } from '@mui/icons-material';

function NowPlaying({musicInfo,page,DarkMode,playlists}) {
    const [options, setoptions] = useState(false)
    const [isPlaying, setisPlaying] = useState(true)
    const [shuffleOn, setshuffleOn] = useState(false)
    const [repeatOn, setrepeatOn] = useState(false)
    const [playlist, setplaylist] = useState(false)
    
    // function to display and remove more options 
     const handleOptions=(e)=>{
        let option=document.querySelectorAll('.info')[0]
        option.classList.toggle('visible')
    }

    // function to display playsists 
    const handlePlaylist=()=>{
        setplaylist(true)
        handleOptions()
    }
 
    // function to remove playlist 
    const removePlaylists=()=>{
        let container=document.querySelectorAll('main')[0]
        if(playlist){
            container.addEventListener('click',()=>{
                setplaylist(false)
            })
        }
    }
  return (
    <div className={DarkMode ? 'NowPlayingDark' : 'NowPlaying'}>
        <nav>
            <div className="img" onClick={()=>page('songs')}>
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
            <h1>Boom Player</h1>
        </nav>
        <main onClick={removePlaylists}>
            <div className="disc">
            </div>
            <div className='info'>
                <div onClick={handleOptions}>
                    <p >Play next</p>
                </div>
                <div onClick={handlePlaylist}>
                    <p>Add to playlist</p>
                </div>
                <p onClick={handleOptions}>Delete</p>
            </div>
            <div className="discContainer">
                <div className="controls">
                    <div className="shuffle">
                    {
                            shuffleOn 
                            ?
                            <div onClick={()=>setshuffleOn(false)}>
                                <IconButton>
                                    <ShuffleOnIcon className='pink shuffleImg'/>
                                </IconButton>
                            </div>
                            :
                            <div onClick={()=>setshuffleOn(true)}>
                                <IconButton>
                                    <ShuffleIcon className='pink shuffleImg'/>
                                </IconButton>
                            </div>
                        }
                    </div>
                    <div className="repeat">
                    {
                            repeatOn 
                            ?
                            <div onClick={()=>setrepeatOn(false)}>
                                <IconButton>
                                    <RepeatOneIcon className='pink shuffleImg'/>
                                </IconButton>
                            </div>
                            :
                            <div onClick={()=>setrepeatOn(true)}>
                                <IconButton>
                                    <RepeatIcon className='pink shuffleImg'/>
                                </IconButton>
                            </div>
                        }
                    </div>
                </div>
                <div className="musicInfo">
                <h3 className='laptop'>{musicInfo.song}-{musicInfo.artist}</h3>
                <marquee behavior="scroll" className='mobile' direction="left"><h3>{musicInfo.song}-{musicInfo.artist}</h3></marquee>
                </div>
                
                <div className="optionsWrapper">
                    <div className="option" onClick={handleOptions}>
                        {
                            DarkMode ?
                            <IconButton>
                                <MoreVertIcon className='pink'/>
                            </IconButton>
                            :
                            <IconButton>
                                <MoreVertIcon className='black'/>
                            </IconButton>
                        }
                    </div>
                </div>
            </div>
            <div className="musciLength">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </div>
            <div className="musicTime">
                <p className='left'>0:00</p>
                <p className='right'>{musicInfo.time}</p>
            </div>
            <div className="musicButton">
                <div className="backward">
                    <IconButton>
                        <SkipPreviousIcon className='pink controlBtn'/>
                    </IconButton>
                </div>
                <div className="play">
                    {
                            isPlaying 
                            ?
                            <div onClick={()=>setisPlaying(false)}>
                                <IconButton>
                                    <PauseIcon className='pink controlBtn'/>
                                </IconButton>
                            </div>
                            :
                            <div onClick={()=>setisPlaying(true)}>
                                <IconButton>
                                    <PlayArrowIcon className='pink controlBtn'/>
                                </IconButton>
                            </div>
                        }
                </div>
                <div className="forward">
                    <IconButton>
                        <SkipNextIcon className='pink controlBtn'/>
                    </IconButton>
                </div>
            </div>
            <div className='absolute'>
                {
                    playlist &&
                    <div className={DarkMode ? 'PlayListDark' : 'PlayList'}>
                        <main>
                            <div className="AddPlaylist" onClick={()=>page('newPlaylist')}>
                                <div className="addWrapper" >
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
                                return <div className="playlistSongs" key={item} onClick={()=>setplaylist(false)}>
                                            <div className="img" ></div>
                                            <h3>{item}</h3>
                                        </div>
                                })}
                            </div>
                        </main>
                    </div>
                }
            </div>
        </main>
    </div>
  )
}

export default NowPlaying