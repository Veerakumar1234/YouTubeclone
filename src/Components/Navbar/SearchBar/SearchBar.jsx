import React from 'react'
import  './SearchBar.css'

function SearchBar() {
  return (
    <>
      <div className="search_Navbar">
            <div>
                <input type="search" placeholder='Search'/>
                <label htmlFor=""><i class="fa-solid fa-magnifying-glass fa-lg"></i></label>
            </div>
            <div className='microphone_icon'>
                    <span>
                    <i class="fa-solid fa-microphone"></i>
                    </span>
                </div>
        </div>
    </>
  )
}

export default SearchBar
