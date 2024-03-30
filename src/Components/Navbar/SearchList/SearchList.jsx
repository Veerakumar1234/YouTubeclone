import React,{useEffect,useState} from 'react'
import './SearchList.css'
import {gapi} from "gapi-script"
import { useDispatch, useSelector } from 'react-redux';
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google'
import { login } from '../../../api';
import Auth from '../../../Pages/Auth/Auth';

function SearchList({setEditCreateChanelBtn}) {
  const [AuthBtn,setAuthBtn]=useState(false)
 // const CurrentUser=null;
//const CurrentUser = {
  // result: {
    //  email: "abzxy50312@gmail.com",
    //  joinedOn: "2222-07-15T09:57:23.489Z",
 //    },
  // };
const CurrentUser=useSelector(state=>state.currentUserReducer)
 console.log(CurrentUser)
  useEffect(()=>{
    function start(){
      gapi.client.init({
       clientId:'53943115384-03p11tpuendmh56qsnu2babq30q7kl57.apps.googleusercontent.com',
        scope:"email",
      })

    }
    gapi.load("client:auth2",start);
  },
  []);
  const dispatch=useDispatch();
  const onSuccess=(response)=>{
const Email=response?.profileObj.email;
console.log(Email);
dispatch(login({email:Email}))
  }
  const onFailure=(response)=>{
    console.log("Failed",response);
  }
  return (
    <>
    <div className="SearchList_Container">

        
        <div className='video_icon_SearchList'>
            <span><i class="fa-solid fa-video"></i></span>
        </div>
        <div className='bell_icon_SearchList'>
            <span><i class="fa-solid fa-bell"></i></span>
            
        </div>
        
        <div className='profile_icon_SearchList' onClick={()=>setAuthBtn(true)} >
               <span> <i class="fa-solid fa-user" style={{color: '#1006a2'}}></i></span>

          {
            CurrentUser ?(
            <>
            <div className="Chanel_logo_App" >
              <p className="fstChar_logo_App">
                {
                  CurrentUser?.result.name ?(
                    <>
                    {CurrentUser?.result.name.charAt(0).toUpperCase()}
                    </>
                  ):(<>

                  {CurrentUser?.result.email.charAt(0).toUpperCase()}
                  </>)
                }
              </p>
            </div>
            </>):(<>
            <div style={{display:'none'}}>
              <GoogleOAuthProvider 
               clientId={"53943115384-03p11tpuendmh56qsnu2babq30q7kl57.apps.googleusercontent.com"}
               onSuccess={onSuccess}
               onFailure={onFailure}
               render={(renderProps)=>(
                <p onClick={renderProps.onClick} className="Auth_Btn">
                  </p> ) }   
              >
                <GoogleLogin/>
              </GoogleOAuthProvider>
              </div>
            </>
            ) }
       
        </div>
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

export default SearchList
/*
           <GoogleButton
           
        clientId={'53943115384-03p11tpuendmh56qsnu2babq30q7kl57.apps.googleusercontent.com' }
            scope='openid profile email'
            discoveryDocs='claims_supported'
            access_type='offline'
            onResolve={({provider,data}) =>{
              console.log(provider,data);
            }}
            onReject={(err)=>{
              console.log(err);
            }}
          
        render={(renderProps)=>(
          <p onClick={renderProps.onClick} className="Auth_Btn">
          <BiUserCircle size={28}/>
            </p>
        ) }   
           > </GoogleButton>*/

