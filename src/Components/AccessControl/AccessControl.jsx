import React from 'react';
import './AccessControl.css';
import { MdCheck, MdLock } from 'react-icons/md';

function AccessControl() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const video=document.getElementById('video_page')
    const popup=document.getElementById('popup')
    const accessmain=document.getElementById('access_main')
  accessmain.style.display='none'
      popup.style.display=' none'
      video.style.display='flex'

    fetch("https://formspree.io/f/xleqplww", {
      method: 'POST',
      body: data,
    })
    .then(response => {
      if (response.ok) {
        alert('Success');
        event.target.reset(); 
      } else {
        alert('Error');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Subscribe Successfully');
    });
  };
  

  
  const Subscribe=()=>{
    const sbc=document.getElementById('sub_btn_container')
    const contactform=document.getElementById('contact-form')
    contactform.style.display='flex'
    sbc.style.display='none'

  }


  return (
    <>
      <div className='popup_access' id='popup'></div>
      <div className='access_main_container' id='access_main'>
        <div className="sub_text_container" id='sub_btn_container'>
        <h1>
          Please Subscribe To Access The Videos
        </h1>
        <h1 className="icon">
          <span><MdLock size={60}/></span>
        </h1>
        <div className="subscribe_btn" onClick={Subscribe}>
         Subscribe <MdCheck id='check_icon'/>
        </div>
        </div>
        <div className="container2">
          <form onSubmit={handleSubmit} className="form_container" id='contact-form'>
            <h1>Subscribe</h1>
            <input type="text" placeholder='Name' className='name' id='inbox' required/>
            <input type="email" placeholder='Email' name='email'id='inbox' className='email' required/>
            <input type="number" placeholder='Phone Number' name='phone number' className='number' required/>
            <div className="gender">
              <input type="radio" name='gender' required id='inbox'/> <label htmlFor="gender">Male</label>
            </div>
            <div className="gender">
              <input type="radio" name='gender' id='inbox' required/> <label htmlFor="gender">Female</label>
            </div>
            <textarea name="" className='textbox' placeholder='Enter Your Personal Information'></textarea>
            <input type="submit" value='Submit' className='submit' id='sub' />
          </form>
        </div>
      </div>

        
    

    </>
  );
}

export default AccessControl;

