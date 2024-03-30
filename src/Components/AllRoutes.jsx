import React from 'react'
import Home from '../Pages/Home/Home';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Library from '../Pages/Library/Library';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import WatchLater from '../Pages/WatchLater/WatchLater';
import YourVideo from '../Pages/YourVideo/YourVideo';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import VideoPage from '../Pages/VideoPage/VideoPage';
import Chanel from '../Pages/Chanel/Chanel';
import Login from './Login/Login';
import AccessControl from './AccessControl/AccessControl';

function AllRoutes({setEditCreateChanelBtn, setVidUploadPage}) {
  return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/library' element={<Library/>}/>
     <Route path='/history' element={<WatchHistory/>}/>
     <Route path='/watchlater' element={<WatchLater/>}/>
     <Route path='/yourvideo' element={<YourVideo/>}/>
     <Route path='/likedvideo' element={<LikedVideo/>}/>
     <Route path='/videopage/:vid' element={<VideoPage/>}/>
     <Route path='/chanel/:Cid' element={
     <Chanel 
    
     setVidUploadPage={setVidUploadPage}
      setEditCreateChanelBtn={setEditCreateChanelBtn}
     />}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/access/videopage' element={<AccessControl/>}/>


    </Routes>
  )
}

export default AllRoutes
