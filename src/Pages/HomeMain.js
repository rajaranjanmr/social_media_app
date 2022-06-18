import "./home.css"
import logoImg from "../assets/logoM.png"
import {useEffect, useState} from "react";
import {Link } from "react-router-dom"
import {users} from "../backend/db/users"
import { logIn, signUp } from "../utility/apiCall";
import { useAuth } from "../context/authContext";
import {useNavigate,useLocation} from "react-router-dom";
import { usePostContext } from "../context/postContext";
function HomeMain(){
  const {postState,postDispatch} = usePostContext();

  const [userName,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [pwd,setPwd] = useState("")
  const [pwdRepeat,setPwdRepeat] = useState("")
  const [eye,setEye] = useState("fa-solid fa-eye-slash fa-eye-slash-repeat");
  const {isLoggedIn,setLogIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  function setEyeValue(){
    if(eye==="fa-solid fa-eye-slash fa-eye-slash-repeat")
    setEye("fa-solid fa-eye fa-eye-slash-repeat")
    if(eye==="fa-solid fa-eye fa-eye-slash-repeat")
    setEye("fa-solid fa-eye-slash fa-eye-slash-repeat")
  }  

  async function defaultClickHandler(e){
    e.preventDefault();
    const response = await signUp(users[0].email,users[0].password)
    localStorage.setItem("token",response.token);
    if(localStorage.getItem("token"))
    setLogIn(true);
    location?.state?.from?.pathname === undefined
      ? navigate("/home")
      : navigate(location?.state?.from?.pathname);

  }
  async function logInClickHandler(e){
    e.preventDefault();
    const response = await logIn(email,pwd);
    localStorage.setItem("token",response.token);
    setLogIn(true);
    console.log(response,"its login")
    location?.state?.from?.pathname === undefined
      ? navigate("/home")
      : navigate(location?.state?.from?.pathname);

  }
  console.log(email,pwd,"signuppp")
  async function signUpClickHandler(e){
    e.preventDefault();
    console.log(email,pwd)

    if(pwd === pwdRepeat){
      const response = await signUp(email,pwd,userName);
      localStorage.setItem("token",response.token);
      setLogIn(true);
      // postDispatch({type:"SET_USERS", payload:response.users})


      console.log("response ",response);
      location?.state?.from?.pathname
      ? navigate(location?.state?.from?.pathname)
      : navigate('/home')
      
    
    }
  }
  console.log("userss",postState)
  return(
        <div className="home-page">

        <div className="home-page-card z-10 border-solid ">
            <div className="left-side bg-purple-300 flex flex-col gap-4">
            <div className="heading">
                <img src={logoImg} alt="logo of app"/>
            </div>
            <button className="get-started px-8 py-2 mt-12 bg-blue-900 hover:bg-blue-400 text-slate-300 rounded-lg" onClick={(e)=>defaultClickHandler(e)}>Log In As Guest</button>
            </div>
            <div className="right-side bg-blue-300" >
            <div className="main bg-emerald-100	">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true" >Sign up</label>
					<input type="text" name="txt" placeholder="User name" required onChange={(e)=>setUserName(e.target.value)} />
					<input type="email" name="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/>
					<input type="password" name="pswd" placeholder="Password" required onChange={(e)=>setPwd(e.target.value)}/>
          <input type="password" name="pswd" placeholder="Retype Password" required onChange={(e)=>setPwdRepeat(e.target.value)}/>
          <i className={eye}  onClick={()=>setEyeValue()}></i>
					<button className="px-8 py-2 mt-12 bg-blue-900 hover:bg-blue-400 text-slate-300 rounded-lg"onClick={(e)=>signUpClickHandler(e)}>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true" >Login</label>
					<input type="email" name="email" placeholder="Email" required onChange={(e)=>setUserName(e.target.value)}/>
					<input type="password" name="pswd" placeholder="Password" required onChange={(e)=>setPwd(e.target.value)}/>
          <i className={eye}  onClick={()=>setEyeValue()}></i>

					<button className=" px-8 py-2 mt-12 bg-blue-900 hover:bg-blue-400 text-slate-300 rounded-lg"onClick={(e)=>logInClickHandler(e)}>Login</button>
				</form>
			</div>
	</div>
            </div>
        </div>


            
        </div>
    )
}
export {HomeMain}

-ea
-DNoDynamicAdmin=true
-Dconsole.log.level="INFO"
-DconfigOverload="/Users/raranjan/IdeaProjects/09062022/topics-definition-api-tests/src/test/resources/topicsdefinition-app-config-override.yaml"
-DretryFailedTests=false
-Denvironment=test