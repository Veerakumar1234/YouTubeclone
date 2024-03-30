import React, { useState } from 'react'
import './Comments.css'
//import { hasFormSubmit } from '@testing-library/user-event/dist/utils'
import {postComment} from "../../actions/comments"
import DisplayComments from './DisplayComments'
import { useDispatch, useSelector } from 'react-redux'
function Comments({videoId}) {
 const[commentText, setCommentText]=useState("")
 const CurrentUser=useSelector((state)=>state?.currentUserReducer);
// const commentsList=useSelector(s=>s.commentReducer)
   const commentsList=[
        {
            _id:"1",
        commentBody:"Nice",
        userCommented:"",
        },
        {
            _id:"2",
            commentBody:"Beautifull",
            userCommented:"",
            },
    ]
    const dispatch=useDispatch()
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        if(!commentText){
            alert('please Type Your Comment !')
        }else{
             dispatch(postComment({
                videoId:videoId,
                userId:CurrentUser?.result._id,
                commentBody:commentText,
                userCommented:CurrentUser?.result._name,
             }));
             setCommentText(" ");
        }
    }
  return (
    <>
    <form action="" className='comments_sub_form_comments'
     onSubmit={handleOnSubmit}>
        <input type="text"
        onChange={e=>setCommentText(e.target.value)} 
         value={commentText} 
         placeholder='add comment...'
         className='comment_ibox'
         />
         <input type="submit" 
         value='add'
         className='comment_add_btn_comments'
         />

    </form>
    <div className="display_comment_container">
        {
            commentsList?.map(m=>{
                return(
                 <DisplayComments
                 cId={m._id}
                 userId={m.userId}
                  commentBody={m.commentBody} 
                  commentOn={m.commentOn}
                  userCommented={m.userCommented}
                 />  
                
                )

            })
        }
        
    </div>
    </>
 
  )
}

export default Comments
