import "./App.css";
import logo from "./logo.png";
import {Routes,Route} from "react-router-dom"
import {Home} from "./Pages/Home"
import { HomeMain } from "./Pages/HomeMain";
import { Bookmark } from "./Pages/Bookmark";
import {Notification} from "./Pages/Notification"
import { FriendList } from "./Pages/FriendList";
import { PostPage } from "./Pages/PostPage";
import Update from "./Pages/Update";
import Setting from "./Pages/Setting";
import { RequiresAuth } from "./RequiresAuth";
import { EditPost } from "./Pages/EditPost";

function App() {
  
 return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomeMain/>} ></Route>
      <Route path="/home" element={
        <RequiresAuth>
          <Home/>
      </RequiresAuth>
      } ></Route>
      <Route path="/bookmark" element={
        <RequiresAuth>
      <Bookmark/>
      </RequiresAuth>
      }></Route>
      <Route path="/notification" element={
      <RequiresAuth>
      <Notification/>
      </RequiresAuth>}></Route> 
      <Route path="/friend" element={
      <RequiresAuth><FriendList/>
      </RequiresAuth>}></Route> 
      <Route path="/post" element={
      <RequiresAuth><PostPage/>
      </RequiresAuth>}></Route> 
      <Route path="/update" element={
      <RequiresAuth><Update/>
      </RequiresAuth>}></Route>
      <Route path="/setting" element={
      <RequiresAuth>
        <Setting/>
        </RequiresAuth>}>

        </Route>
<Route path="/editpost" element={
      <RequiresAuth>
        <EditPost/>
        </RequiresAuth>}>
          
        </Route>

    </Routes>
    </div>
  );
}

export default App;
