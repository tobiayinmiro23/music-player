import React ,{useState,useRef}from 'react'
import './Songs.css'
import {IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DeleteIcon from '@mui/icons-material/Delete';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import {Volume} from './Volume'
import VolumeDown from '@mui/icons-material/VolumeDown';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import NewPlaylist from './NewPlaylist'
let plays=[
    {
        song:'Blow my mind',
        artist:'Davido ft Chris brown',
        time:'3:32',
        id:1
    },
    {
        song:'23',
        artist:'Burnaboy',
        time:'3:44',
        id:2
    },
    {
        song:'Rocking',
        artist:'Zinoleesky',
        time:'2:46',
        id:3
    },
    {
        song:'Be something',
        artist:'Polo g ft Lil Baby',
        time:'3:14',
        id:4
    },
    {
        song:'Run away',
        artist:'Kofee',
        time:'3:04',
        id:5
    },
    {
        song:'Riding with it',
        artist:'G herbo',
        time:'3:17',
        id:6
    },
    {
        song:'Nwoke owa',
        artist:'Chike',
        time:'3:09',
        id:7
    },
    {
        song:'What happened to virgil',
        artist:'Lil durk ft Gunna',
        time:'3:01',
        id:8
    },
    {
        song:'Enjoy yourself',
        artist:'Pop smoke ft Burnaboy',
        time:'3:19',
        id:10
    },
    {
        song:'Bad bad bad',
        artist:'Young thug ft Lilbaby',
        time:'3:32',
        id:11
    },
    {
        song:' Ye ye ye',
        artist:'Omah kay',
        time:'3:27',
        id:12
    },
    {
        song:'Champion sound',
        artist:'Davido ft focalistic',
        time:'4:13',
        id:13
    },
    {
        song:'Xo',
        artist:'Beyonce',
        time:'3:36',
        id:14
    },
    {
        song:'Finesse',
        artist:'Pheelz ft Bnxn',
        time:'2:20',
        id:15
    },
    {
        song:'Slide',
        artist:'Calvin Haris ft Frank Ocean ft Migos',
        time:'3:51',
        id:16
    },
    {
        song:'Italy',
        artist:'Buju',
        time:'3:08',
        id:17
    },
    {
        song:'Holy Father ',
        artist:'Victony ft Mayorkun',
        time:'3:05',
        id:18
    },
    {
        song:'Southy love',
        artist:'Fireboy ft Peruzzi',
        time:'3:18',
        id:19
    },
    {
        song:'Feaky Deaky',
        artist:'Tyga ft Doja Cat',
        time:'3:35',
        id:20
    }
]
const Songs = ({nowPlaying,page,DarkMode,playlists}) => {

    const [Playing, setPlaying] = useState('')
    const [optionInfo, setoptionInfo] = useState('')
    const [isPlaying, setisPlaying] = useState(true)
    const [pause, setpause] = useState(true)

    // function to get the information of the currently playing song 
    const NowPlaying=(songinfo)=>{
        setPlaying(songinfo)
        nowPlaying(songinfo)
    }  
        let songs=document.querySelectorAll('.kkk')[0]
        let currentlyPlaying=document.querySelectorAll('.NowPlaying')[0]

    // function to show currently playing song 
    const displayPlaying=()=>{
        let currentlyPlaying=document.querySelectorAll('.NowPlaying')[0]
        let songs=document.querySelectorAll('.kkk')[0]
        songs.classList.add('songsWrapper')
        currentlyPlaying.classList.add('block')
    }
    // function to remove currently playing song 
    const cancelPlaying=()=>{
        let currentlyPlaying=document.querySelectorAll('.NowPlaying')[0]
        let songs=document.querySelectorAll('.kkk')[0]
         songs.classList.remove('songsWrapper')
        currentlyPlaying.classList.remove('block')
    }

    // function to display more options like add to playlist,delete 
    const handleOptions=(musicinfo)=>{
        let current=document.querySelector('.current')
        setoptionInfo(musicinfo)
        current.classList.toggle('currentVisible')
    }

    // function to remove options 
    const removeOptions=(musicinfo)=>{
        let current=document.querySelector('.current')
        current.classList.remove('currentVisible')
    }
    // functio  to display playlists 
    const AddToPlaylist=()=>{
        setplaylist(true)
        removeOptions()
    }
    // function to remove playlist 
    const removePlaylists=()=>{
        if(playlist){
            songs.addEventListener('click',()=>{
                setplaylist(false)
            })
        }
    }
    
    const [options, setoptions] = useState(false)
    const [currentlyplaying, setcurrentlyplaying] = useState(true)
    const [shuffleOn, setshuffleOn] = useState(false)
    const [repeatOn, setrepeatOn] = useState(false)
    const [playlist, setplaylist] = useState(false)
  return (
    <div className={ DarkMode ? 'SongsDark' : 'Songs'}>
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
            <h1>songs</h1>
            
            <div className="search" onClick={()=>page('search')}>
                    {
                        DarkMode ?
                        <IconButton>
                            <SearchIcon className='white'/>
                         </IconButton>
                        :
                        <IconButton>
                        <SearchIcon className='black'/>
                        </IconButton>
    
                    }   
            </div>
        </nav>
        <div className="kkk" onClick={removePlaylists}>
            {plays.map(item=>{
            return <div key={item.id} onClick={()=>NowPlaying(item)} className="wrapper">
                    <div className="songImg"></div>
                    <div className="info" onClick={displayPlaying}>
                        <h4>{item.song}</h4>
                        <div className="artist">
                            <p>{item.artist}</p>
                            <p>{item.time}</p>
                        </div>
                    </div>
                    <div className="options" onClick={()=>handleOptions(item)}>
                        {
                            DarkMode ?
                            <IconButton>
                                <MoreVertIcon className='white'/>
                            </IconButton>
                            :
                            <IconButton>
                            <MoreVertIcon className='black'/>
                            </IconButton>
        
                        }
                    </div>
                </div>
            })}
        </div>
        <div className="current">
            <div className="currentSong">
                <div className="songImg"></div>
                <div className="currentSongInfo">
                    <h2 className='laptop'>{optionInfo.song}-{optionInfo.artist}</h2>
                    <h2 className='mobile'><marquee behavior="scroll" direction="left">{optionInfo.song}-{optionInfo.artist}</marquee></h2>
                    <p>{optionInfo.time}</p>
                </div>
                <div className="cancel">
                    {
                        DarkMode ?
                        <IconButton onClick={removeOptions}>
                            <ClearIcon className='white' />
                        </IconButton>
                        :
                        <IconButton onClick={removeOptions}>
                            <ClearIcon className='black' />
                        </IconButton>
                    }
                </div>
            </div>
            <div className="currentInfo">
                <div className="container" onClick={removeOptions}>
                    {
                        DarkMode ?
                        <IconButton>
                            <PlaylistPlayIcon className='white'/>
                        </IconButton>
                        :
                        <IconButton>
                            <PlaylistPlayIcon className='black'/>
                        </IconButton>
                    }
                    <p>Play next</p>
                </div>
                <div className="container" onClick={AddToPlaylist}>
                {
                        DarkMode ?
                        <IconButton>
                            <PlaylistAddIcon className='white'/>
                        </IconButton>
                        :
                        <IconButton>
                            <PlaylistAddIcon className='black'/>
                        </IconButton>

                    }
                    <p>Add to playlist</p>
                </div>
                <div className="container" onClick={removeOptions}>
                    {
                        DarkMode ?
                        <IconButton>
                            <DeleteIcon className='white'/>
                        </IconButton>
                        :
                        <IconButton>
                            <DeleteIcon className='black'/>
                        </IconButton>

                    }
                    <p>Delete</p>
                </div>
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
                                return <div className="playlistSongs" key={item} onClick={()=>setplaylist(false)} >
                                            <div className="img" ></div>
                                            <h3>{item}</h3>
                                        </div>
                                })}
                            </div>
                        </main>
                    </div>
                }
        </div>
        <div className="NowPlaying">
            <div className="NowPlayingWrapper">
                <div className='Container' onClick={()=>page('nowPlaying')}>
                    <div className="NowPlayingImg">
                    </div>
                    <div className='NowPlayinginfoWrapper'>
                        <div className="NowPlayinginfo">
                            <h4 className='laptop' id='song '>{Playing.song} - {Playing.artist}</h4>
                        </div>
                        <marquee behavior="scroll"  direction="left"><h4 id='song' className='mobile'>{Playing.song} - {Playing.artist}</h4></marquee>
                        <p className="time">{Playing.time}</p>
                    </div>
                </div>
                
                {/* trial start */}
                <div className='musicButtonContainer'>
                            <div className="musicButton">
                                <div className="shuffle">
                                {
                                        shuffleOn 
                                        ?
                                        <div onClick={()=>setshuffleOn(false)}>
                                            <IconButton>
                                                <ShuffleOnIcon className='pink repeatImg'/>
                                            </IconButton>
                                        </div>
                                        :
                                        <div onClick={()=>setshuffleOn(true)}>
                                            <IconButton>
                                                <ShuffleIcon className='pink repeatImg'/>
                                            </IconButton>
                                        </div>
                                    }
                                </div>
                                <div className="backward">
                                    <IconButton>
                                        <SkipPreviousIcon className='pink'/>
                                    </IconButton>
                                </div>
                                <div className="play">
                                    {
                                            isPlaying 
                                            ?
                                            <div onClick={()=>setisPlaying(false)}>
                                                <IconButton>
                                                    <PauseIcon className='pink'/>
                                                </IconButton>
                                            </div>
                                            :
                                            <div onClick={()=>setisPlaying(true)}>
                                                <IconButton>
                                                    <PlayArrowIcon className='pink'/>
                                                </IconButton>
                                            </div>
                                        }
                                </div>
                                <div className="forward">
                                    <IconButton>
                                        <SkipNextIcon className='pink'/>
                                    </IconButton>
                                </div>
                                <div className="repeat">
                                {
                                        repeatOn 
                                        ?
                                        <div onClick={()=>setrepeatOn(false)}>
                                            <IconButton>
                                                <RepeatOneIcon className='pink repeatImg'/>
                                            </IconButton>
                                        </div>
                                        :
                                        <div onClick={()=>setrepeatOn(true)}>
                                            <IconButton>
                                                <RepeatIcon className='pink repeatImg'/>
                                            </IconButton>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="currentMusicLength">
                                <div className="musciLength">
                                    <Volume className='pink'/>
                                </div>
                                <div className="musicTime">
                                    <p className='left'>0:00</p>
                                    <p className='right'>{Playing.time}</p>
                                </div>
                            </div>
                </div>

                {/* </div> */}
                {/* trial end */}
                <div className="cancelWrapper">
                    
                    <div className="pause-play">
                        {
                            pause 
                            ?
                            <div onClick={()=>setpause(false)}>
                                <IconButton>
                                    <PauseIcon className='pink'/>
                                </IconButton>
                            </div>
                            :
                            <div onClick={()=>setpause(true)}>
                                <IconButton>
                                    <PlayArrowIcon className='pink'/>
                                </IconButton>
                            </div>
                        }
                    </div>
                    <div className="Volume">
                        <VolumeDown className='pink'/>
                        <Box width={160}>
                            <Slider
                            size="small"
                            className='vol'
                            defaultValue={70}
                            secondary= 'teal'
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            />
                        </Box>
                    </div>
                    <div className="cancel" onClick={cancelPlaying}>
                        <IconButton>
                            <ClearIcon className='pink'/>
                        </IconButton>
                    </div>
                </div>

            </div>
        
        </div>
    </div>
  )
}

export default Songs