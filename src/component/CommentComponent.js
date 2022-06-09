import logoImg from "../assets/logoM.png";
function CommentComponent() {
  return (
    <>
      <div className="comment-main flex flex-col gap-5 relative top-2 justify-start">
        <div className="profile-comment flex flex-row gap-3 ">
        <div className="logo-image">
            <img src={logoImg} className="w-6 h-6 rounded-full relative top-5" />
          </div>
          <div className="user-name text-xl relative right-8 top-3">username</div>
          
        </div>
        <div className="comment-content">comment content</div>
      </div>
    </>
  );
}
export {CommentComponent}
