import logoImg from "../assets/logoM.png"
import "../Pages/home.css"
function PostComponent(){
    return(
        <div className="post-item">
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
        </div>
    )
}
export {PostComponent}