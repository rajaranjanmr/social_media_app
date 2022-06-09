import logoImg from "../assets/logoM.png";
import {useNavigate} from "react-router-dom";
import { HeaderComponent } from "../component/HeaderComponent";
function Update(){
    const navigate=useNavigate();
    function discardPost(){
    
        navigate("/home")
    }
    return(<>
    <div className="create-post h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500" onClick={()=>discardPost()}>
      <i class="fa-solid fa-arrow-left-long" ></i>
         <span className="create-post-text"> update profile</span>
      </div>
      <div className="user-profile">
        <div className="user-logo">
<img className="user-logo-post" src={logoImg} />
        </div>
        <div className="user-name">
            Raja Ranjan
        </div>
      </div>
    <div className="update-component">
        <div className="profile-update">
            <div className="profile-image">
            <img src={logoImg} alt="proflie pic"/>
            </div>
            <button className="bg-blue-900 hover:bg-blue-400 text-slate-300">upload
            <input type="file"/>
            </button>
            
        </div>
        <div className="profile-details">
        <div className="profile-bio">
            <label htmlFor="bio" placeholder="About your self !" autofocus>Bio : {}</label>
            <textarea for="bio"></textarea>
        </div>
        <div className="profile-portfolio">
        <label htmlFor="bio">Portfolio : { }</label>
            <textarea type="text" htmlFor="bio"></textarea>
        </div>
        </div>
        <div className="button-section">
            <button className="bg-blue-900 hover:bg-blue-400 text-slate-300">save</button>
            <button className="bg-blue-900 hover:bg-blue-400 text-slate-300" onClick={()=>discardPost()}>cancel</button>

        </div>
    </div>
    </>)
}
export default Update