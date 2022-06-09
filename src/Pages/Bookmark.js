import { useEffect } from "react"
import { BookmarkComponent } from "../component/BookmarkComponent"
import { HeaderComponent } from "../component/HeaderComponent"
import { TabsComponent } from "../component/TabsComponent"
import { usePostContext } from "../context/postContext"
import { getAllBookmarksByUser } from "../utility/apiCall"

function Bookmark(){
    const {postState,postDispatch} = usePostContext()
    useEffect(()=>{
        async function getAllBookmarks(){
                const response = await getAllBookmarksByUser();
                postDispatch({type:"SET_BOOKMARKS", payload:response.bookmarks})
        }
        getAllBookmarks();
        console.log(postState,"inside bookmarks")
    },[])
    return(
        <>
        <HeaderComponent/>
        <TabsComponent/>
        <div className="bookmarks flex flex-col gap-5 pt-8">
        {postState?.bookmarks?.map((x)=>{
            return <BookmarkComponent value={x}/>
        })}
        </div>
        </>
    )
}
export {Bookmark}