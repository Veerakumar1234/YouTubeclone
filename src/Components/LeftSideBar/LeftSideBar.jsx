import React from 'react'
import {MdHome} from "react-icons/md"
import {MdExplore} from "react-icons/md"
import {MdSubscriptions} from "react-icons/md"
import Shorts from "./Shorts.png"
import {MdVideoLibrary} from "react-icons/md"
import './LeftSideBar.css'
import { NavLink } from 'react-router-dom'

function LeftSideBar() {
  return (
    <div className='container_LeftSideBar'>
      <div className='h_e_s_main_container'>
        <NavLink to={'/'} className="home_sidebar_div">
        <div className="icon_home_sidebar_div">
            <span><MdHome size={22} className='icon_home'/></span>
        </div>
        <div className="text_home_sidebar_div">
            <p>Home</p>
        </div>
      </NavLink>
      <div className="explore_sidebar_div">
      <div className="icon_explore_sidebar_div">
            <span><MdExplore size={22} className='icon_explore'/></span>
        </div>
        <div className="text_explore_sidebar_div">
            <p>Explore</p>
        </div>
      </div>

      <div className="shorts_sidebar_div">
      <div className="icon_shorts_sidebar_div">
      <img src={Shorts}  className='icon_Shorts' style={{margin:"auto 0.7rem"} } alt=''/>
        </div>
        <div className="text_shorts_sidebar_div">
            <p>Shorts</p>
        </div>
      </div>

      <div className="subscription_sidebar_div">
      <div className="icon_subscription_sidebar_div">
            <span><MdSubscriptions size={22} className='icon_subscription'/></span>
        </div>
        <div className="text_subscription_sidebar_div">
            <p>Subscriptions</p>
        </div>
      </div>
      <NavLink to={'/library'} className="library_sidebar_div">
      <div className="icon_library_sidebar_div">
            <span><MdVideoLibrary size={22} className='icon_library'/></span>
        </div>
        <div className="text_library_sidebar_div">
            <p>Library</p>
        </div>
      </NavLink>
  

      </div>
    </div>
  )
}

export default LeftSideBar
