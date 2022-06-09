import logoImg from "../assets/logoM.png";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../context/authContext";
function Setting(){
    const navigate=useNavigate();
    const {setLogIn} = useAuth();
    function discardPost(){
    
        navigate("/home")
    }
    function onClickLogOut(){
        localStorage.removeItem("token");
        setLogIn(false);
        navigate("/");
        
    }
    return(
        <>
        <div className="create-post h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500" onClick={()=>discardPost()}>
      <i class="fa-solid fa-arrow-left-long" ></i>
         <span className="create-post-text"> setting</span>
      </div>
      <div className="user-profile">
        <div className="user-logo">
<img className="user-logo-post" src={logoImg} />
        </div>
        <div className="user-name">
            Raja Ranjan
        </div>
      </div>
      <div className="setting">
          <button className="bg-blue-900 hover:bg-blue-400 text-slate-300" onClick={()=>navigate("/update")}> Update Profile</button>
          <button className="bg-blue-900 hover:bg-blue-400 text-slate-300" onClick={()=>onClickLogOut()}>Logout</button>

      </div>
        </>
    )
}
export default Setting