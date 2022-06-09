const postReducerFunction = (state, action) => {
    switch(action.type){
        case "SET_POSTS":
            return{
                ...state, posts:action.payload
            }
        case "SET_BOOKMARKS":
            return{
                ...state,bookmarks:action.payload
            }
        case "SET_COMMENTS":
            return{
                ...state,comments:action.payload
            }
        case "SET_USERS":
            return{
                ...state,users:action.payload
            }
        case "SET_EDIT_POST":
            return{
                ...state,editPost:{...action.payload}
            }
        default:
            return state;
    }
}
export {postReducerFunction}