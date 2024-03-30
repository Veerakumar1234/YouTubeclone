import React from 'react'
import './Home.css'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../Components/Video/vid.mp4'
import { useSelector } from 'react-redux'
function Home() {
  const videosFile=useSelector(state=>state.videoReducer);
  console.log(videosFile)
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
       const NavList=[
        "All",
        "Python",
        "Java",
        "C++",
        "Movies",
        "Science",
        "Animation",
        "Gaming",
        "Comedy",
        "Language",
        "English",
        "Food",
        "Cricket",
        "Football",
        "Nature",
        "Updates",
        "University"
       ]
  return (
    <div className="container_pages_App">
        <LeftSideBar/>
        <div className="container2_pages_App">
          <div className="navigation_Home">
            {
              NavList.map(m=>{
                return(
                <p key={m} className="btn_nav_home">
                  {m}
                </p>)
              })
            }
          </div>
            <ShowVideoGrid vids={vids}/>
        </div>
    </div>
  )
}

export default Home
