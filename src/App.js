import "./App.css";
import logo from "./logo.png";
import {Routes,Route} from "react-router-dom"
import {Home} from "./Pages/Home"
import { HomeMain } from "./Pages/HomeMain";
import { Bookmark } from "./Pages/Bookmark";
import {Notification} from "./Pages/Notification"
import { FriendList } from "./Pages/FriendList";

function App() {
  // function getActiveStyle({isActive}){
  //   {
  //     border:"1px solid black",
      
  //   }
  // }
  const getActiveStyle = ({ isActive }) => ({
    border:"1px solid black",
    backgroundColor:"red"
  });
  
  return (
    <div className="App">
    <Routes>
      <Route path="/home" element={<Home/>} ></Route>
      <Route path="/" element={<HomeMain/>} ></Route>
      <Route path="/bookmark" element={<Bookmark/>}></Route>
      <Route path="/notification" element={<Notification/>}></Route> 
      <Route path="/friend" element={<FriendList/>}></Route> 

    </Routes>
    </div>
  );
}

export default App;
