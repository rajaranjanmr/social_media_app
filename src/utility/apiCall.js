import axios from "axios";
import { users } from "../backend/db/users";
const headers =
 { authorization: localStorage.getItem("token") };
const getAllPosts = async () => {
    try{
        const response = await axios.get("/api/posts");
        return {posts: response.data.posts, success:true}
    }
    catch(err){
        return {posts: [], success: false}

    }
}
const getPostById = async (id) => {
    console.log("get post by id",id)
    // try{
        const response = await axios.get(`/api/posts/${id}`);
        return {post: response.data.post, success:true}
    // }
    // catch(err){
    //     console.log(err);
    //     return{post:[], success:false}
    // }
}
const getPostByUsername = async (userName) =>{ 
    try{
        const response = await axios.get(`/api/posts/user/:${userName}`);
        return {posts:response.data.posts, success:true}
    }
    catch(err){
        console.log(err);
        return({posts:[],success:false})
    }
}
const addPosts = async (postData) =>{
    console.log("post data",postData)
    try{
        const response = await axios.post(
            "/api/posts",
            {postData},
            {headers}
        )
        return { posts:response.data.posts, success:true}
    }
    catch(err){
        console.log(err);
        return {posts:[],success:false}
    }
}
const editPostById = async (post_id,post) =>{
    console.log("posttt",post)
    try{
        const response = await axios.post( `api/posts/edit/${post_id}`,
        {postData:post},
        {headers}
        );
        console.log(response, "--->post api call")
        return {posts:response.data.posts, success:true}
    }
    catch(err){
        console.log(err);
        return {posts:[],success:false}
    }
}
const deletePostById = async (post_id) =>{
   try{
        const response = await axios.delete(`/api/posts/${post_id}`,
        {headers});
        return {posts:response.data.posts, success:true}
    }
    catch(err){
        console.log(err);
        return {posts:[],success:false}
    }
}
const getAllUsers = async () => {
    try{
        const response = await axios.get("/api/users")
        return {users:response.data.users, success:true}
    }
    catch(err){
        console.log(err);
        return {users:[],success:false}
    }
}
const getUserById = async (user_id) => {
    try{
        const response = await axios.get(`/api/users/:${user_id}`,)
        return {users:[...users,response.data.user],success:true}
    }
    catch(err){
        console.log(err)
        return {users:[],success:false}
    }
}
const editUser = async (user)=>{
    try{
        const response = await axios.post("/api/users/edit",{headers},{user})
        return {users:[...users,response.data.user],success:true}
    }
    catch(err){
        console.log(err)
        return {users:[...users],success:false}
    }
}
const editPost = async (post_id) =>{
    try{
        const response = await axios.post(`/api/posts/edit/:${post_id}`,
        {headers})
        return {users:response.data.user,success:true}
    }
    catch(err){
        console.log(err)
        return {users:[],success:true}
    }
}
const likePostById = async (post_id) =>{
    console.log("like--",post_id)
    try{
        const response = await axios.post(`/api/posts/like/${post_id}`,
        {headers},{})
        return {posts:response.data.posts, success:true}
    }
    catch(err){
        console.log(err);
        return {posts:[], success:false}
    }
}
const dislikePostById = async (post_id) =>{
    
    try{
        const response = await axios.post(`/api/posts/dislike/${post_id}`,{},
        {headers})
        return {posts: response.data.posts, success:true}
    }
    catch(err){
        console.log(err);
        return {posts:[],success:false}
    }
}
const addBookmark = async (post_id) =>{
    console.log(post_id,"bookmarkkkkkkk")
    // try{
        const response = await axios.post(`/api/users/bookmark/${post_id}`,
        {},{headers})
        console.log("api response",response)
        return {bookmarks:response.data.bookmarks, success:true}
    // }
    // catch(err){
    //     console.log(err)
    //     return {bookmarks:[], success:false}
    // }
}
const removeBookmark = async (post_id) =>{
    try{
        const response = await axios.post(`/api/users/remove-bookmark/${post_id}`,
        {},{headers})
        return {bookmarks:response.data.bookmarks, success:true}
   }
    catch(err){
        console.log(err)
        return {bookmarks :[], success:false}
    }
}
const getAllBookmarksByUser = async () =>{
    try{
        const response = await axios.get(`/api/users/bookmark/`,
        {headers})
        return {bookmarks:response.data.bookmarks, success:true}
    }
    catch(err){
        console.log(err)
        return {bookmarks:[],success:false}
    }
}
const signUp = async (email,password,userName)=>{
    console.log(email,password)
    try{
        const response = await axios.post("/api/auth/signup",{email: email, password: password,userName: userName})
        return {token : response.data.encodedToken, success: true}
    }
    catch(err){
        console.log(err)
        return {token:"",success:false}
    }
}
const logIn = async (email,password)=>{
    try{
        const response = await axios.post("/api/auth/login",{email: email,password: password})
        return {token: response.data.encodedToken, success: true};
    }
    catch(err){
        return {token:"", success: false}
    }
}
const getAllComment = async (post_id)=>{
    try{
        const response = await axios.get(`/api/comments/:${post_id}`)
        return {comments:response.data.comments , success:true}
    }
    catch(err){
        console.log(err)
        return {comments:[], success:false}
    }
}
const createComment = async (post_id,post_data)=>{
    try{
    const response = await axios.post(`/api/comments/add/${post_id}`,
    {post_data},
    {headers})
    return {comments:response.data.comments,success:true}
    }
    catch(err){
        console.log(err);
        return {comments:[],success:false}
    }
}
const editComment = async (post_id,comment_id,comment)=>{
    try{
        const response = await axios.post(`/api/comments/edit/:${post_id}/:${comment_id}`,
        {headers},
        {comment}
        )
        return {comments:response.data.comments,success:true}
    }
    catch(err){
        console.log(err)
        return {comments:[],success:false}
    }
}
const deleteComment = async (post_id,comment_id)=>{
    try{
        const response = await axios.post(`/api/comments/delete/:${post_id}/:${comment_id}`,{headers})
        return {comments:response.data.comments,success:true}
    }
    catch(err){
        console.log(err)
        return {comments:[],success:false}
    }
}
const commentUpvote = async (post_id,comment_id)=>{
    try{
        const response = await axios.post(`/api/comments/upvote/:${post_id}/:${comment_id}`,
        {headers})
        return {comments:response.data.comments, success:true}
    }
    catch(err){
        console.log(err);
        return {comments:[], success:false}
    }
}
const commentDownvote = async (post_id,comment_id)=>{
    try{
        const response = await axios.post(`/api/comments/downvote/:${post_id}/:${comment_id}`,{headers})
        return {comments:response.data.comments,success:true}

    }
    catch(err){
        console.log(err)
        return {comments:[],success:false}
    }
}
const followUser = async (follow_id)=>{
    try{
        const response = await axios.post(`/api/users/follow/:${follow_id}`,
        {headers})
        return {user:{user:response.data.user,followUser:response.data.followuser,},success:true}
    }
    catch(err){
        console.log(err)
        return {user:{},success:false}
    }
}
const unfollowUser= async(follow_id)=>{
    try{
        const response = await axios.post(`/api/users/unfollow/:${follow_id}`,
        {headers})
        return {user:{user:response.data.user,followUser:response.data.followuser,},success:true}
    }
    catch(err){
        console.log(err)
        return {user:{},success:false}
    }
}
export {
    getAllPosts,
    getPostById,
    addPosts,
    editPostById,
    deletePostById,
    getPostByUsername,
    getAllUsers,
    getUserById,
    editPost,
    likePostById,
    dislikePostById,
    addBookmark,
    removeBookmark,
    getAllBookmarksByUser,
    signUp,
    logIn,
    commentUpvote,
    commentDownvote,
    deleteComment,
    createComment,
    getAllComment,
    editComment,
    editUser,
    followUser,
    unfollowUser

}