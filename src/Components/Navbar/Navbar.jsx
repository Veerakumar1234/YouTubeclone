import React, { useState } from 'react'
import './Navbar.css'
import Logo from './logo.png'
import SearchBar from './SearchBar/SearchBar'
import SearchList from './SearchList/SearchList'
import { Link } from 'react-router-dom'
import Auth from '../../Pages/Auth/Auth'

function Navbar({toggleDrawer,setEditCreateChanelBtn}) {
  const [AuthBtn,setAuthBtn]=useState(false)
  const CurrentUser=null;
  return (
    <>
    <div className='Container_Navbar'>
        <div className='logo_menu_Navbar'>
        <div className="menu_Navbar" onClick={()=>toggleDrawer()}>
            <span className='menu_icon'><i style={{fontSize:'24px'}} class="fa">&#xf0c9;</i></span>
        </div>
        <Link to={'/'} className='logo_Navbar'>
            <div>
            <img src={Logo} alt="" className='main_logo' />
            </div>
            <h3>YouTube</h3>
        </Link>
        </div>
        <SearchBar/>
        <SearchList setEditCreateChanelBtn={setEditCreateChanelBtn}/>

    </div>
    {
      AuthBtn && <Auth
      setEditCreateChanelBtn={setEditCreateChanelBtn}
      setAuthBtn={setAuthBtn}
     User={CurrentUser}
      />
  }
    </>
  )
}

export default Navbar
