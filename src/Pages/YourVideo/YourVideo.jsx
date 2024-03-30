import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../Components/Video/vid.mp4'
import './YourVideo.css'
function YourVideo() {
  const vids = [
    {
      _id: 1,
     video_src: vid,
     Chanel: "62bafe6752cea35a6c30685f",
     title: "video 1",
     Uploder: "abc",
     description: "description of  video 1",
    },
   {
       _id: 2,
      video_src:vid,
     Chanel: "cdd",
     title: "video 2",
      Uploder: "abc",
     description: "description of  video 2",
   },
   {
    _id: 3,
     video_src: vid,
     Chanel: "add",
     title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
   },
   {
     _id: 4,
      video_src: vid,
      Chanel: "add",
      title: "video 4",
       Uploder: "abc",
       description: "description of  video 4",
    },

  ];
  return (
    <div className="container_pages_App">
        <LeftSideBar/>
        <div className="container2_pages_App">
          <div className="container_yourvideo">
          <h1>Your Videos</h1>
            <ShowVideoGrid vids={vids}/>
          </div>
          
        </div>
    </div>
  )
}

export default YourVideo
