import logoImg from "../assets/logoM.png";
import {useState} from "react"
function FriendListComponent(props){
    const [follow,setFollow] = useState("unfollow")
    function followClickHandler(){
        if(follow==="follow"){
        setFollow("unfollow")
        async function followThisUser(){
                const response = await follow
        }
        }
        else if(follow==="unfollow")
        setFollow("follow")
    }
    return(<>

    <div className="header-follow-list relative left-18 flex flex-col gap-8">
        <div className="header-follow-items flex w-4/12  pl-5 pt-10 text-center pr-5 gap-6 justify-between pb-10 border-solid border-4 rounded-3xl border-green-500">
            <div className="logo-follow">
                <img src={logoImg} className="w-14 h-14 rounded-full relative "/>
            </div>
            <div className="user-names text-2xl relative right-8 top-3">
                {props.value.username}
            </div>
            <div className="follow-button relative top-3 right-12 " >
                <button className="bg-fuchsia-600 text-xl rounded-lg pl-5 pt-2 pb-2 pr-5 hover:bg-blue-400 text-black-400 outline-green-500 pl-right outline"
                onClick={()=>followClickHandler()}>{follow}</button>
            </div>
        </div>
    </div>
    </>)
}
export {FriendListComponent}