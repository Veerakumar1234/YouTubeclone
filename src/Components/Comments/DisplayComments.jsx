import React, { useState } from 'react'
import moment from 'moment'
import './Comments.css'
import { useDispatch, useSelector } from 'react-redux'
import { editComment } from '../../api'
function DisplayComments({cId,commentBody,userId,commentOn, userCommented}) {
  const[Edit, setEdit]=useState(false)
  const CurrentUser=useSelector((state)=>state?.currentUserReducer);

  const[cmtBdy, setcmtBdy]=useState("")
  const [cmtid, setcmtId]=useState("")
  const dispatch=useDispatch()

  const handleEdit=(ctId,ctBdy)=>{
    setEdit(true);
    setcmtId(ctId)
    setcmtBdy(ctBdy);

  }
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    if(!cmtBdy){
      alert("Type your Comments")
    }else{
        dispatch(editComment({
          id:cmtid,
          commentBody:cmtBdy
        }));
        setcmtBdy("");
    }
    setEdit(false);
  }
  return (

    <>
    {
      Edit? (<>
         <form action="" className='comments_sub_form_comments'
        onSubmit={handleOnSubmit}
        >
        <input type="text"
        onChange={e=>setcmtBdy(e.target.value)} 

         placeholder='Edit comment...'
         value={cmtBdy}
         className='comment_ibox'
         />
         <input type="submit" 
         value='Change'
         className='comment_add_btn_comments'
         />

    </form>
      
      
      </>):(<>
        <p className="comment_body">{commentBody}</p>

      </>)
    }
      <p className="comment_body">{commentBody}</p>
      <p className='usercommented'> - {userCommented}Commented {moment (commentOn).fromNow()}</p>
      {
        CurrentUser?.result._id===userId &&(
              <p className="EditDel_DisplayCommendt">
        <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
        <i>Delete</i>
      </p>
        )
      }
  
    </>
  )
}

export default DisplayComments
