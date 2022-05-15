import "../Pages/home.css"
function HeaderComponent(){
    return(
        <div className="top-bar h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="profile-icon">
          <i class="fa fa-user fa-user-top" aria-hidden="true"></i>
        </div>
        <input type="text" className="input-search" placeholder="search" />

        <div className="message-icon">
          <i class="fa-brands fa-facebook-messenger"></i>{" "}
        </div>
      </div>
    )
}
export {HeaderComponent}