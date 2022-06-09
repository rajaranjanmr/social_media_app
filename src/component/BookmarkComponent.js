import logoImg from "../assets/logoM.png";
import {useState} from "react";
import {Link} from "react-router-dom"
import { removeBookmark } from "../utility/apiCall";
import { usePostContext } from "../context/postContext";
function BookmarkComponent(props){
    console.log(props,"its props")
    const {postState,postDispatch} = usePostContext()
    const [display,setDisplay] = useState("none");
  const [threeDots,setThreeDots] = useState("none");
  console.log("three dots",threeDots)
  function setThreeDotsHandler(){
    if(threeDots==="none")
    setThreeDots("block")
    else if(threeDots==="block")
    setThreeDots("none")
  }
  async function removeFromBookmark(){
    console.log("deleting bookmark")

    const response = await removeBookmark(props.value._id)
    console.log("deleting bookmark",response)
    postDispatch({type:"SET_BOOKMARKS", payload:response.bookmarks})
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
                <ul className="icons-dots" onClick={()=>setThreeDotsHandler()}>
                  <li >
                  </li>
                  <li >

                  </li>
                  <li ></li>
                </ul>
                <div className="items-three-dots" style={{display:threeDots}}>
                  <button className="links-to-delete" onClick={()=>removeFromBookmark()}>Remove</button>
                  {/* <button className="links-to-delete" to="">delet</button> */}

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
              <i className="fa-solid fa-solid-bottom fa-heart"></i>
            </button>
            <button onClick={()=>{setDisplay("block");}}>
              <i className="fa-solid fa-solid-bottom fa-comment" ></i>
            </button>
            <button >
              <i className="fa-solid  fa-solid-bottom fa-bookmark"></i>
            </button>
          </div>
          <div className="comment-section" style={{display:display}}>
            <textarea className="comment-main-section" placeholder="how is is">

            </textarea>
            <div className="button-comment-section" >
            <button className="comment-post bg-blue-900 hover:bg-blue-400 text-slate-300">Post</button>
            <button className="comment-post bg-blue-900 hover:bg-blue-400 text-slate-300" onClick={()=>setDisplay("none")}>Cancel</button>
            </div>
          </div>
        </div>
)
}
export {BookmarkComponent}