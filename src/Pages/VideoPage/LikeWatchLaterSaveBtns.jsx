import React from 'react'
import './LikeWatchLaterSaveBtn.css';
import { useState } from 'react';
import {
     MdOutlinePlaylistAdd,
      MdOutlinePlaylistAddCheck, 
      MdOutlineThumbDown, 
      MdOutlineThumbUp, 
      MdShare,
     MdThumbDown,
     MdThumbUp} from 'react-icons/md';
//import { useSelector } from 'react-redux';
function LikeWatchLaterSaveBtns({vid}) {
   // const dispatch = useDispatch();

    const [SAveVideo, setSAveVideo] = useState(true)
    const [Dislikebtn, setDislikeBtn] = useState(false)
    const [LikeBtn, setLikeBtn]=useState(false)
   // const CurrentUser = useSelector((state) => state?.currentUserReducer);
    const toggleSavedVideo=()=>{
        if(SAveVideo){
            setSAveVideo(false);

        }else{
            setSAveVideo(true);
        }

    }
    const toggleLikeBtn=()=>{
        
                   if(LikeBtn){
            setLikeBtn(false);

        }else{
            setLikeBtn(true);
           // dispatch(
              //  addToLikedVideo({
                 //   videoId:vid,
                  //  Viewer:CurrentUser?.result._id,

              //  })

           // )
            setDislikeBtn(false)
        } 
        


    }
    const toggleDislikeBtn=()=>{
        
                if(Dislikebtn){
            setDislikeBtn(false);

        }else{
            setDislikeBtn(true);
            setLikeBtn(false)
        } 
        }

        
   

    
  return (
    <div className='btns_cont_videoPage'>
        <div className="btn_VideoPage">
            <b>...</b>
        
        </div>
        <div className="btn_VideoPage">
        <div className="like_videoPage" onClick={()=>toggleLikeBtn()} >
                {
                    LikeBtn ?(
                    <>
              <MdThumbUp size={22} className='btns_videoPage' />
               <b>1</b>
                    </>
                    ):(
                    <>
              <MdOutlineThumbUp size={22} className='btns_videoPage'/>
              <b>0</b>
                    </>
                    )
                }
                
            </div>
            <div className="like_videoPage" onClick={()=>toggleDislikeBtn()}>
                {
                    Dislikebtn ?(<>
              <MdThumbDown size={22} className='btns_videoPage'/>
                    </>):(<>
              <MdOutlineThumbDown size={22} className='btns_videoPage'/>
              
                    </>
                    )
                }<b>Dislike</b>
            </div>
            <div className="like_videoPage" onClick={()=>toggleSavedVideo()}>
                {
                    SAveVideo ?(<>
              <MdOutlinePlaylistAdd size={22} className='btns_videoPage'/>
               <b>Save</b>
                    </>):(<>
              <MdOutlinePlaylistAddCheck size={22} className='btns_videoPage'/>
               <b>Saved</b>
                    </>
                    )
                }
            </div>
            <div className="like_videoPage">
                       <>            
                    <span className='btns_videoPage'>
                        <i class="fa-regular fa-heart"  
                        style={{fontSize:'22'}}
                        ></i></span>
               <b>Thanks</b>
                 </>

            </div>
            <div className="like_videoPage"> 
            <>
            <MdShare size={22} className='btns_videoPage'/>
            <b>Share</b>
            </>
            </div>
        </div>
      
    </div>
  )
}

export default LikeWatchLaterSaveBtns
