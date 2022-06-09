import { Link ,useNavigate} from "react-router-dom";
import logoImg from "../assets/logoM.png";
import React,{useEffect, useState} from "react";
import axios from "axios";
import { PostComponent } from "../component/PostComponent";
import "../Pages/home.css";
import { bookmarkPostHandler } from "../backend/controllers/UserController";
import { HeaderComponent } from "../component/HeaderComponent";
import { TabsComponent } from "../component/TabsComponent";
import { getAllPosts } from "../utility/apiCall";
import { usePostContext } from "../context/postContext";
import { CommentComponent } from "../component/CommentComponent";
function Home() {
  const {postState,postDispatch} = usePostContext();
    const navigate= useNavigate();
    function bookmarkPostHandler(){
        navigate("/bookmark")
    }
    function postFocusHandler(){
      navigate("/post")
    }
    const [bgColor,setBgColor]=useState("")
    function setBgColorSet(){
      if(bgColor==="")
      setBgColor("#8b5cf6")
    
    if(bgColor==="#8b5cf6")
    setBgColor("")
    }
    useEffect(()=>{
        const getAllPostss = async () => {
          const response = await getAllPosts();
          if(response.success){
          console.log(response.posts)
          postDispatch({type:"SET_POSTS",payload:response.posts})
          console.log(postState.posts,"hee")
          }
          else
          console.log("its error")
          
        }
        getAllPostss();
    },[])
  return (
    <div className="home-page ">
        <div className="non-post">
            <HeaderComponent/>
      <TabsComponent/>
      <div className="post-section">
        <div className="profile-icon">
          <i className="fa fa-user fa-user-post" aria-hidden="true" onClick={()=>navigate("/setting")}></i>
        </div>
        <input
          type="textbox"
          placeholder="What's in your mind ?"
          className="post-box"
          onFocus={()=>postFocusHandler()}
        ></input>
        <div className="photo-content">
          <i className="fa-solid fa-solid-post fa-photo-film"></i>
        </div>
      </div>
      </div>
      <div className="filter-section">
        <button className="show-all" style={{backgroundColor:bgColor}} onClick={()=>setBgColorSet()}>Show All</button>
        <button className="show-all" style={{backgroundColor:bgColor}} onClick={()=>setBgColorSet()}>Trending</button>
        <button className="show-all" style={{backgroundColor:bgColor}} onClick={()=>setBgColorSet()}>Created On</button>


      </div>
      <div className="posts flex flex-col-reverse">
        {postState?.posts?.map((x)=>{
          console.log("x",x.id)
          return <PostComponent value={x}/>
        })}
      
      </div>
    </div>
  );
}
export { Home };
