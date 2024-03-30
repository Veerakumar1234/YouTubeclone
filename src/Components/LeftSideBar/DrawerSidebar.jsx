import React from 'react'
import './DrawerSidebar.css'
import { MdHome, MdOutlinePlaylistAdd, MdVideoLibrary, MdWatchLater} from 'react-icons/md'
import {MdExplore} from 'react-icons/md'
import {MdSubscriptions} from 'react-icons/md'
import Shorts from './Shorts.png'
import {FaHistory} from 'react-icons/fa'
import {AiFillLike, AiFillPlaySquare} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../Components/Video/vid.mp4'
function DrawerSidebar({toggleDrawer,toggleDrawerSidebar}) {
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
    <div className='container_drawersidebar_div' style={toggleDrawerSidebar}>
        <div className="container2_drawersidebar_div">
            <div className="drawer_leftsidebar">
                <NavLink to={'/'} className="icon_drawer_div">
                    <p className='drawer_div_icon'>
                        <MdHome size={22} className='icon_home'
                        style={{margin:"auto 0.7rem"}}/>
                    </p>
                    <div className="drawer_div_text_sidebar">
                        <p className='text'>Home</p>
                    </div>
                </NavLink>
                    
                <div className="icon_drawer_div">
                    <p className='drawer_div_icon'>
                        <MdExplore size={22} className='icon_home'
                        style={{margin:"auto 0.7rem"}}/>
                    </p>
                    <div className="drawer_div_text_sidebar">
                        <p className='text'>Explore</p>
                    </div>
            
                </div>
                <div className="icon_drawer_div">
                    <p className='drawer_div_icon'>
                        <img src={Shorts} alt='' className='icon_home'
                        style={{margin:"auto 0.7rem"} }
                        />
                    </p>
                    <div className="drawer_div_text_sidebar">
                        <p className='text'>Shorts</p>
                    </div>
            
                </div>
                <div className="icon_drawer_div">
                    <p className='drawer_div_icon'>
                        <MdSubscriptions size={22} className='icon_home'
                        style={{margin:"auto 0.7rem"}}/>
                    </p>
                    <div className="drawer_div_text_sidebar">
                        <p className='text'>Subscriptions</p>
                    </div>
            
                </div>
            </div>


            <div className="librarybtn_leftsidebar">
                <NavLink to={'/library'} className="icon_librarybtn_div" onClick={()=>toggleDrawer()}>
                    <p className='librarybtn_div_icon'>
                        <MdVideoLibrary size={22} className='icon_home'
                        style={{margin:"auto 0.7rem"}}/>
                    </p>
                    <div className="librarybtn_div_text_sidebar">
                        <p className='text'>Library</p>
                    </div>
            
                </NavLink>
                <NavLink to={'./history'} className="icon_librarybtn_div" onClick={()=>toggleDrawer()}>
                    <p className='librarybtn_div_icon'>
                        <FaHistory size={22} className='icon_home'
                        style={{margin:"auto 0.7rem"}}/>
                    </p>
                    <div className="text_sidebar_icon">
                        <p className='text'>History</p>
                    </div>
            
                </NavLink>
                <div className="icon_librarybtn_div" onClick={()=>toggleDrawer()}>
                    <p className='librarybtn_div_icon'>
                        <MdOutlinePlaylistAdd size={22} className='icon_home'
                        style={{margin:"auto 0.7rem"}}/>
                    </p>
                    <div className="text_sidebar_icon">
                        <p className='text'>Playlists</p>
                    </div>
            
                </div>
                <NavLink to={'/yourvideo'} className="icon_librarybtn_div" onClick={()=>toggleDrawer()}>
                    <p className='librarybtn_div_icon'>
                        <AiFillPlaySquare size={22} className='icon_home'
                        style={{margin:"auto 0.7rem"}}/>
                    </p>
                    <div className="librarybtn_div_text_sidebar">
                        <p className='text'>Your Videos</p>
                    </div>
            
                </NavLink>
                <NavLink to={'/watchlater'} className="icon_librarybtn_div"  onClick={()=>toggleDrawer()}>
                    <p className='librarybtn_div_icon'>
                        <MdWatchLater size={22} className='icon_home'
                        style={{margin:"auto 0.7rem"}}/>
                    </p>
                    <div className="librarybtn_div_text_sidebar">
                        <p className='text'>WatchLater</p>
                    </div>
                </NavLink>
                <NavLink to={'/likedvideo'} className="icon_librarybtn_div"  onClick={()=>toggleDrawer()}>
                    <p className='librarybtn_div_icon'>
                        <AiFillLike size={22} className='icon_home'
                        style={{margin:"auto 0.7rem"}}/>
                    </p>
                    <div className="librarybtn_div_text_sidebar">
                        <p className='text'>Liked Videos</p>
                    </div>
                </NavLink>
            </div>


            <div className="container_subscription_leftsidebar">
                <div className="main_text_div">
                    <h3>Subscriptions</h3>
                 </div>  
                < div className='all_subscription_text_div'>
                    <div className="channels_div">
                        <div className="icon_channel">
                             <p>J</p>          
                        </div>
                        <div className="channel_name">
                               <p>Java Channel</p> 
                        </div>
                    </div>
                    <div className="channels_div">
                        <div className="icon_channel">
                             <p>P</p>          
                        </div>
                        <div className="channel_name">
                               <p>Python Channel</p> 
                        </div>
                    </div>
                    <div className="channels_div">
                        <div className="icon_channel">
                             <p>H</p>          
                        </div>
                        <div className="channel_name">
                               <p>HTML Channel</p> 
                        </div>
                    </div>
                    <div className="channels_div">
                        <div className="icon_channel">
                             <p>R</p>          
                        </div>
                        <div className="channel_name">
                               <p>ReactJS Channel</p> 
                        </div>
                    </div>
                    <div className="channels_div">
                        <div className="icon_channel">
                             <p>J</p>          
                        </div>
                        <div className="channel_name">
                               <p>JavaScript Channel</p> 
                        </div>
                    </div>

                </div>
            </div>

        </div>

     { <div className="container3_drawersidebar_div" onClick={()=>toggleDrawer()}>
     <ShowVideoGrid vids={vids}/>

      </div>}
    </div>
  )
}

export default DrawerSidebar
