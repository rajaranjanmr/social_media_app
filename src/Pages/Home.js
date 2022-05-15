// import "../Pages/home.css"
import { Link ,useNavigate} from "react-router-dom";
import logoImg from "../assets/logoM.png";
// import {VscHome} from "react-icons"
import { VscHome } from "react-icons/vsc";
import { PostComponent } from "../component/PostComponent";
import "../Pages/home.css";
import { bookmarkPostHandler } from "../backend/controllers/UserController";
import { HeaderComponent } from "../component/HeaderComponent";
import { TabsComponent } from "../component/TabsComponent";
function Home() {
    const navigate= useNavigate();
    function bookmarkPostHandler(){
        navigate("/bookmark")
    }
  return (
    <div className="home-page ">
        <div className="non-post">
            <HeaderComponent/>
      {/* <div className="top-bar h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="profile-icon">
          <i class="fa fa-user fa-user-top" aria-hidden="true"></i>
        </div>
        <input type="text" className="input-search" placeholder="search" />

        <div className="message-icon">
          <i class="fa-brands fa-facebook-messenger"></i>{" "}
        </div>
      </div> */}
      <TabsComponent/>
      {/* <div className="tabs">
        <button className="tablink  bg-blue-900 hover:bg-blue-400 text-slate-300">
          <i class="fa-solid fa-solid-t fa-square-rss"></i>
        </button>
        <button className="tablink bg-blue-900 hover:bg-blue-400 text-slate-300">
          <i class="fa-solid fa-solid-t fa-user-group"></i>
        </button>
        <button className="tablink bg-blue-900 hover:bg-blue-400 text-slate-300">
          <i class="fa-solid fa-solid-t fa-bell"></i>
        </button>
        <button className="tablink bg-blue-900 hover:bg-blue-400 text-slate-300" onClick={()=>bookmarkPostHandler()}>
          <i class="fa-solid fa-solid-t fa-bookmark"></i>
        </button>
      </div> */}
      <div className="post-section">
        <div className="profile-icon">
          <i class="fa fa-user fa-user-post" aria-hidden="true"></i>
        </div>
        <input
          type="textbox"
          placeholder="What's in your mind ?"
          className="post-box"
        ></input>
        <div className="photo-content">
          <i class="fa-solid fa-solid-post fa-photo-film"></i>
        </div>
      </div>
      </div>
      <div className="posts">
          <PostComponent/>
          <PostComponent/>
        {/* <div className="post-item">
          <div className="post-header">
            <div className="profile-logo">
              <img src={logoImg} className="profile-logo-img" />
            </div>
            <div className="profile-name">
              its name
              <p className="update-date">date</p>
            </div>
          </div>
          <div className="post-middile-section">
            <div className="post-text-content">hows</div>
            <div className="post-image">
              <img src={logoImg} className="post-image-at-time"></img>
            </div>
          </div>
          <div className="post-bottom-section">
            <button>
              <i class="fa-solid fa-solid-bottom fa-heart"></i>
            </button>
            <button>
              <i class="fa-solid fa-solid-bottom fa-comment"></i>
            </button>
            <button>
              <i class="fa-solid  fa-solid-bottom fa-bookmark"></i>
            </button>
          </div>
        </div> */}


        {/* <div className="post-item">
          <div className="post-header">
            <div className="profile-logo">
              <img src={logoImg} className="profile-logo-img" />
            </div>
            <div className="profile-name">
              its name
              <p className="update-date">date</p>
            </div>
          </div>
          <div className="post-middile-section">
            <div className="post-text-content">hows</div>
            <div className="post-image">
              <img src={logoImg} className="post-image-at-time"></img>
            </div>
          </div>
          <div className="post-bottom-section">
            <button>
              <i class="fa-solid fa-solid-bottom fa-heart"></i>
            </button>
            <button>
              <i class="fa-solid fa-solid-bottom fa-comment"></i>
            </button>
            <button>
              <i class="fa-solid  fa-solid-bottom fa-bookmark"></i>
            </button>
          </div>
        </div> */}
        <PostComponent/>
      </div>
    </div>
  );
}
export { Home };
