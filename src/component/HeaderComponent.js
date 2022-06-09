import "../Pages/home.css"
import {useNavigate} from "react-router-dom";
function HeaderComponent(){
  const navigate = useNavigate();
    return(
        <div className="top-bar h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="profile-icon">
          <i className="fa fa-user fa-user-top" aria-hidden="true" onClick={()=>navigate("/update")}></i>
        </div>
        <input type="text" className="input-search" placeholder="search" />

        <div className="message-icon">
          <i className="fa-brands fa-facebook-messenger"></i>{" "}
        </div>
      </div>
    )
}
export {HeaderComponent}