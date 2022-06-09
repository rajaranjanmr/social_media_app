import {useState, useEffect} from "react"
import {useLocation,useNavigate} from "react-router-dom"
import { usePostContext } from "../context/postContext";
import { addPosts, editPostById, getPostById } from "../utility/apiCall";
import logoImg from "../assets/logoM.png";
function EditPost(){
    const location = useLocation()
  const postEditId = location.state
  const {postState,postDispatch} = usePostContext();
  const [postContent,setPostContent] = useState("")
  const [media,setMedia] = useState("")
  function getTodaysDate(){
    const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(date+time)
return date + " "+ time;  
}
  console.log(media)
    const navigate=useNavigate();
    console.log(postContent)
    function discardPost(){
    
        navigate("/home")
    }
    let postAPIData = postState?.editPost
    async function handleClickPost(){
        

        // setEditPost({...editPost,content:postContent})
        console.log(postState,"before api call")
        
        const response = await editPostById(postEditId,{...postState.editPost,content:postContent})
        console.log(response)
        if(response.success){
            postDispatch({type:"SET_POSTS",payload:response.posts})
            console.log("---->>",postState)
            console.log("done updation")
            navigate("/home")
        }

    }
   
      const [editPost,setEditPost] = useState({})
      useEffect(()=>{
        async function getPost(){
          const response = await getPostById(postEditId)
          if(response.success){
              console.log(response)
        postDispatch({type:"SET_EDIT_POST",payload:response.post})
            console.log(response)

            setPostContent(response.post.content)
            // postDispatch({type:"SET_EDIT_POST",payload:{...response.post,content:postContent}})
        }
          else{
            setEditPost({})
          }

        }
        getPost();
      },[])
      console.log(postContent,"---")
    return(
        <>
        <div className="post-page-section">
      <div className="create-post h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <i class="fa-solid fa-arrow-left-long" onClick={()=>discardPost()}></i>
         <span className="create-post-text"> edit post</span>
      </div>
      <div className="user-profile">
        <div className="user-logo">
<img className="user-logo-post" src={logoImg} alt="logo" />
        </div>
        <div className="user-name">
            Raja Ranjan
        </div>
      </div>
      <div className="input-post">
          <textarea className="post-input-field" autofocus="true" 
          onChange={(e)=>setPostContent(e.target.value)} placeholder="what's on your mind" defaultValue={postState?.editPost?.content}
          onMouseOut={(e)=>setPostContent(e.target.value)}
          >
          {/* {postState?.editPost?.content} */}
          </textarea>
      </div>
      <div className="attachments">
      <div className="file-attach ">
      <label for="avatar">
      <i className="fa-solid fa-solid-posts fa-paperclip" onChange={(e)=>setMedia(e.target.value)}></i>
          <input type="file"
        name="avatar" id="avatar"
       accept="image/png, image/jpeg"/> 
          </label>
      
          </div>
          <div className="images-attach">
          <label for="avatar">
          <i className="fa-solid  fa-solid-posts fa-images "></i>
          <input type="file"
        name="avatar" id="avatar"
       accept="image/png, image/jpeg"/> 
          </label>
          </div>
          <button className="location">
          <i className="fa-solid fa-solid-posts fa-location-dot"></i>
          </button>
          <div className="emojis">
          <label for="avatar">
              <i className="fa-solid fa-solid-posts fa-face-grin-hearts"></i>
          <input type="file"
        name="avatar" id="avatar"
       accept="image/png, image/jpeg"/> 
          </label>


          {/* <i class="fa-solid fa-solid-posts fa-face-grin-hearts"></i> */}
          </div>
          </div>  
          <div className="button-post">
          <button className="post-update bg-blue-900 hover:bg-blue-400 text-slate-300" onClick={()=>discardPost()}>Delete</button>

              <button className="post-update bg-blue-900 hover:bg-blue-400 text-slate-300" onClick={()=>handleClickPost()}>Post</button>

          </div>
    </div>

  </>
    )
}
export {EditPost}