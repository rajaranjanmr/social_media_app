import "../Pages/home.css"
import {useNavigate,NavLink} from "react-router-dom"
function TabsComponent(){
    const getActiveStyle = ({ isActive }) => ({
        borderLeft: isActive ? "0.5px solid black" :"none",
        borderRight:isActive ? "0.5px solid black" : "none",
        backgroundColor:"yello",
        // backgroundColor:
      });
    const navigate= useNavigate();
    function bookmarkPostHandler(){
        navigate("/bookmark")
    }
    function feedPostHandler(){
        navigate("/home")
    }
    function notificationPostHandler(){
        navigate("/notification")
    }
    function friendListPostHandler(){
        navigate("/friend")
    }

    return(
          <div className="tabs">
        <NavLink className="tablink  bg-blue-900 hover:bg-blue-400 text-slate-300" style={getActiveStyle} to="/home">
          <i class="fa-solid fa-solid-t fa-square-rss"></i>
        </NavLink>
        <NavLink className="tablink bg-blue-900 hover:bg-blue-400 text-slate-300" style={getActiveStyle} to="/friend">
          <i class="fa-solid fa-solid-t fa-user-group"></i>
        </NavLink>
        <NavLink className="tablink bg-blue-900 hover:bg-blue-400 text-slate-300" style={getActiveStyle} to="/notification">
          <i class="fa-solid fa-solid-t fa-bell"></i>
        </NavLink>
        <NavLink className="tablink bg-blue-900 hover:bg-blue-400 text-slate-300" style={getActiveStyle} to="/bookmark">
          <i class="fa-solid fa-solid-t fa-bookmark"></i>
        </NavLink>
      </div>
        
    )
}
export {TabsComponent}