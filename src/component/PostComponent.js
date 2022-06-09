import logoImg from "../assets/logoM.png";
import {Link, Navigate, useNavigate} from "react-router-dom"
import React, {useState} from "react";
import "../Pages/home.css"
import { addBookmark, createComment, deletePostById, dislikePostById, likePostById } from "../utility/apiCall";
import { usePostContext } from "../context/postContext";
import { CommentComponent } from "./CommentComponent";
function PostComponent(props){
  const {postState,postDispatch} = usePostContext()
  console.log("its pros",  typeof props.value)
  const [display,setDisplay] = useState("none");
  const [threeDots,setThreeDots] = useState('none');
  const [heartColor,setHeartColor] = useState("violet")
  const [postData,setPostData] = useState("")
  const navigate = useNavigate()
  console.log("its pros---",  typeof props.value)
  async function heartClickHandler(){
    if(heartColor==="violet"){
    setHeartColor("maroon")
    const response = await likePostById(props.value._id)
   postDispatch({type:"SET_POSTS",payload:response.posts})
    }
    else if(heartColor ==="maroon"){
    setHeartColor("violet")
    const response = await dislikePostById(props.value._id)
   postDispatch({type:"SET_POSTS",payload:response.posts})
    }
   
  }
  function setThreeDotsHandler(){
    if(threeDots==="none")
    setThreeDots("block")
    else
    setThreeDots("none")
  }
  async function deleteThePost(){
    const response = await deletePostById(props.value._id)
    postDispatch({type:"SET_POSTS",payload:response.posts})
  }
  async function bookmarkClickHandler(){
    const response = await addBookmark(props.value._id);
    console.log(response,"its responseee",props.value._id)
    postDispatch({ type: "SET_BOOKMARKS", payload: response.bookmarks });
    console.log(postState)
  }
  async function commentPostClickHandler(){
    
    const response = await createComment(props.value._id,postData);
    postDispatch({type:"SET_COMMENTS",payload:response.comments})
    console.log("comment section creation",postState)
  }
  function editPostHandler(){
    navigate("/editpost",{state:props.value._id})
  }
    return(
        <div className="post-item">
          <div className="post-header">
            <div className="profile-logo">
              <img src={logoImg} className="profile-logo-img" />
            </div>
            <div className="profile-name">
              {props.value.username}
              <p className="update-date">{props.value.createdAt}</p>
            </div>
            <div className="profile-options">
              <div className="three-dots">
                <ul className="icons-dots"onClick={()=>setThreeDotsHandler()}>
                  <li >
                  </li>
                  <li >

                  </li>
                  <li ></li>
                </ul>
                <div className="items-three-dots" style={{display:threeDots}}>
                  <button className="links-to-delete" onClick={()=>{editPostHandler();setThreeDotsHandler();}}>edit</button>
                  <button className="links-to-delete" onClick={()=>{deleteThePost();setThreeDotsHandler();}}>delete</button>

                </div>
              </div>
            </div>
          </div>
          <div className="post-middile-section">
            <div className="post-text-content">{props.value.content}</div>
            <div className="post-image">
              <img src={logoImg} className="post-image-at-time" alt="logo"/>
            </div>
          </div>
          <div className="post-bottom-section">
            <button>
              <i className="fa-solid fa-solid-bottom fa-heart " style={{color:heartColor}} onClick={()=>heartClickHandler()}><span className="text-inside">1k</span></i>
            </button>
            <button onClick={()=>{setDisplay("block");}}>
              <i className="fa-solid fa-solid-bottom fa-comment" ></i>
            </button>
            <button  onClick={()=>bookmarkClickHandler()}>
              <i className="fa-solid  fa-solid-bottom fa-bookmark"></i>
            </button>
          </div>
          <div className="comment-section" style={{display:display}}>
            <textarea className="comment-main-section" placeholder="how is is" onChange={(e)=>setPostData(e.target.value)}>

            </textarea>
            <div className="button-comment-section" >
            <button className="comment-post bg-blue-900 hover:bg-blue-400 text-slate-300" onClick={()=>commentPostClickHandler()}>Post</button>
            <button className="comment-post bg-blue-900 hover:bg-blue-400 text-slate-300" onClick={()=>setDisplay("none")}>Cancel</button>
            </div>
            {/* comment section existing */}
            <CommentComponent/>
          </div>
        </div>
    )
}
export {PostComponent}