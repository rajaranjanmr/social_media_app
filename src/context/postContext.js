import {createContext,useContext,useReducer } from "react"
import { postReducerFunction } from "./postReducer";
const PostContext = createContext(null);
const PostContextProvider = ({children}) => {
    const [postState, postDispatch] = useReducer(postReducerFunction,{
        posts: [],
        bookmarks:[],
        comments:[],
        users:[],
        editPost:{}
    })

return(<>
<PostContext.Provider value={{postState,postDispatch}}>
    {children}
</PostContext.Provider>
</>)
}
const usePostContext = () => useContext(PostContext)
export {usePostContext,PostContextProvider}
