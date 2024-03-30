import React from 'react'
import './Library.css'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import WHLVideoList from '../../Components/WHL/WHLVideoList'

import { MdHistory, MdWatchLater } from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'
import vid from '../../Components/Video/vid.mp4'
function Library() {
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
             <div className="container_libraryPage">
                <h1 className="title_container_LibraryPage">
                  <b>
                    <MdHistory />
                  </b>
                  <b>History</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                  <WHLVideoList
                   page={"History"}
                   videoList={vids}
                  
                  />
                </div>
              </div>
              <div className="container_libraryPage">
                <h1 className="title_container_LibraryPage">
                  <b>
                    <MdWatchLater />
                  </b>
                  <b>Watch Later</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                  <WHLVideoList
                   page={"Watch Later"}
                   videoList={vids}
                  
                  />
                </div>
              </div>
              <div className="container_libraryPage">
                <h1 className="title_container_LibraryPage">
                  <b>
                    <AiFillLike />
                  </b>
                  <b>Liked Videos</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                  <WHLVideoList
                   page={"Liked Videos"}
                   videoList={vids}
                  
                  />
                </div>
              </div>

        </div>
    </div>
  )
}

export default Library
