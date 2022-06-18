import "../Pages/home.css";
import logoImg from "../assets/logoM.png";
import {useNavigate , useLocation} from "react-router-dom";
import {useEffect, useState}  from "react"
import { usePostContext } from "../context/postContext";
import { addPosts, getAllUsers, getPostById } from "../utility/apiCall";

function PostPage() {
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
const [editPost,setEditPost] = useState({})
      useEffect(()=>{
        async function getPost(){
          const response = await getPostById(postEditId)
          if(response.success){
            setEditPost(response.post)
            console.log(editPost)
          }
          else{
            setEditPost({})
          }

        }
        getPost();
      },[])
  const [postData,setPostData]=useState(
    {
      username:"",
      logo:"",
      content:"",
      createdOn:"",
      attachedFile:""
    }
  )

  console.log(media)
    const navigate=useNavigate();
    console.log(postContent)
    function discardPost(){
    
        navigate("/home")
    }
    async function handleClickPost(e){
      // const response = addPosts()
      // e.preventDefault();
      console.log("inside click handker")
      // setPostData({
      //   username:postState.userName,
      //   logo:"",
      //   content:postContent,
      //   createdAt:getTodaysDate(),
      //   attachedFile:""
      //   })
        const response = await addPosts({
          username:postState.username,
          logo:"",
          content:postContent,
          createdAt:getTodaysDate(),
          attachedFile:""
          });
        console.log("its csdaflh",response)

        if(response.success){
          console.log("its csdaflh",response)
          postDispatch({type:"SET_POSTS", payload:response.posts})
        }
        else{
          console.log("error");
        }

        console.log(postState)
        navigate("/home")
      }
      
      
  return <>
  <div className="post-page-section">
      <div className="create-post h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <i class="fa-solid fa-arrow-left-long" onClick={()=>discardPost()}></i>
         <span className="create-post-text"> create post</span>
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
          onChange={(e)=>setPostContent(e.target.value)} placeholder="what's on your mind">
          {editPost?.content}
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

  </>;
}
export { PostPage };

