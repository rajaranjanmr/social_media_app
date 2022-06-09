import { useEffect } from "react"
import { FriendListComponent } from "../component/FriendListComponent"
import { HeaderComponent } from "../component/HeaderComponent"
import { TabsComponent } from "../component/TabsComponent"
import { usePostContext } from "../context/postContext"
import { getAllUsers, getUserById } from "../utility/apiCall"
function FriendList(){
    const {postState,postDispatch} = usePostContext();
    useEffect(()=>{
       async function getAllUsersFromDb(){
            const response = await getAllUsers();
            postDispatch({type:"SET_USERS", payload:response.users})
            console.log(response, "inside the friend list")
        }
    getAllUsersFromDb();
    },[])
    console.log(postState)
    return(
        <>
         <HeaderComponent/>
        <TabsComponent/>
        <div className="flex flex-col gap-8">
        <div className="header font-black text-3xl py-16 px-16">to whom follow</div>

       { postState?.users?.map((x)=>{ return <FriendListComponent value={x}/>})}
       </div>
       </>
    )
}
export {FriendList}