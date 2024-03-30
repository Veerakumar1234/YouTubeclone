import React from 'react'
import vid from '../../Components/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
import Comments from '../../Components/Comments/Comments'
import AccessControl from '../../Components/AccessControl/AccessControl'

function VideoPage() {
   // const vv=vid?.data.filter((q)=>q._id===vid)[0];
  return (

    <>     
     <AccessControl />

    <div className='container_videoPage' style={{display:'none'}} id='video_page'>  

        <div className="container2_videoPage">
            <div className="video_display_screen_videoPage">
                <video src={vid}
                 className={"video_ShowVideo_videoPage"}  controls >

                </video>
                <div className="video_details_videoPage">
                <div className='  video_btns_title_VideoPage_cont'>
                    <p className="video_title_VideoPage">  Title</p>
                    <div className='views_date_btns_VideoPage'>
                        <div className="views_videoPage">
                           5 views <div className="dot"></div>Uploded 1 year ago
                        </div>
                    </div>
                    <LikeWatchLaterSaveBtns  vid={vid}/>
                </div>
                
                <div className='chanel_details_videoPage '>
                
                    <b className='chanel_logo_videoPage'>
                        <p>J</p>
                    </b>
                    <p className='chanel_name_videoPage'>Java Channel</p>
                </div>
                <div className='comments_VideoPage'>
                    <h2>
                        <u>Comments</u>
                        </h2>
                        <Comments />  
                </div>
                    
                </div>
            </div>
            <div className='moreVideoBar'>
                More Videos
            </div>

        </div>
      
      </div>
    </>
  )
}

export default VideoPage
/* videoId={vv}*/