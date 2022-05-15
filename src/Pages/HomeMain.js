import "./home.css"
import logoImg from "../assets/logoM.png"
import {Link } from "react-router-dom"
function HomeMain(){
    return(
        <div className="home-page">

        <div className="home-page-card z-10 border-solid ">
            <div className="left-side bg-purple-300 flex flex-col gap-4">
            <div className="heading">
                <img src={logoImg} alt="logo of app"/>
            </div>
            <Link to="/home" className="get-started px-8 py-2 mt-12 bg-blue-900 hover:bg-blue-400 text-slate-300 rounded-lg">Get Started</Link>
            </div>
            <div className="right-side bg-blue-300">
            <div className="main bg-emerald-100	">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required="" />
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button className="px-8 py-2 mt-12 bg-blue-900 hover:bg-blue-400 text-slate-300 rounded-lg">Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button className=" px-8 py-2 mt-12 bg-blue-900 hover:bg-blue-400 text-slate-300 rounded-lg">Login</button>
				</form>
			</div>
	</div>
            </div>
        </div>



            {/* <div className="home-card-page bg-white border-8"> */}
                    {/* <div className="left-side w-3/5 bg-slate-600">
                        <div className="heading text-6xl">MonuWay</div>
                        <button className="to-move">Get Started</button>

                    </div>
                    <div className="right-side  bg-gray-800">
                        its 
                    </div> */}
                    {/* <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0 bg">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}
            {/* </div> */}
            
        </div>
    )
}
export {HomeMain}