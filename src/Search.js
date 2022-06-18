import React,{useState} from 'react'
import './Search.css'
import {IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import NowPlaying from './NowPlaying';
const Search = ({nowPlaying,page,DarkMode}) => {
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
        time:' ',
        id:19
    },
    {
        song:'Feaky Deaky',
        artist:'Tyga ft Doja Cat',
        time:'3:35',
        id:20
    }
]
  const [searchText, setsearchText] = useState('')
  const [searchResult, setsearchResult] = useState([])
//   function to search for a song 
  const handleSearch=()=>{
      if(searchText !== ''){
        var result=plays.filter(item=>{
            return item.song.toLowerCase().includes(searchText.toLowerCase())
          })
          setsearchResult(result)
      }
  }
//   function that renders the NowPlaying component 
  const playSearchResult=(musicinfo)=>{
      nowPlaying(musicinfo)
      page('nowPlaying')
  }
  return (
    <div className={DarkMode ? 'SearchDark' : 'Search'}>
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
                <input type="search" value={searchText} onInput={(e)=>setsearchText(e.target.value)} placeholder='Search songs' name="" id="" />
                <div className="img" onClick={handleSearch}>
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
            <main>
            <div className="searchWrapper">
                <div className="Songs">
                    <div className="kkk">
                        {searchResult.map(item=>{
                        return <div key={item.id} onClick={()=>playSearchResult(item)} className="wrapper">
                                <div className="songImg"></div>
                                <div className="info" >
                                    <h4>{item.song}</h4>
                                    <div className="artist">
                                        <p>{item.artist}</p>
                                        <p>{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                
            </div>
            </main>
    </div>
  )
}

export default Search