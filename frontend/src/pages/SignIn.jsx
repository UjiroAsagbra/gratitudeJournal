import {useState} from  "react"
import { useUserSignup } from "../users/signup"
import {Navigate} from "react-router-dom"
<<<<<<< HEAD
import "../components/css/login.css"

=======
import '../components/css/login.css'
>>>>>>> e6dfb13 (Initial Commit)


const Signin = () => {
 
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
<<<<<<< HEAD
  const [noUser, setNoUser] = useState(false)
=======
>>>>>>> e6dfb13 (Initial Commit)
  const [goTo, setGoTo] = useState(null)
  const {loginUser} = useUserSignup()

  const handleSignin = async () => {
    const response = await loginUser(user);
    const { success } = response;
     if (success) {
      setGoTo({
        pathname: "/entrylist" 
      });
     } else{
<<<<<<< HEAD
      setNoUser(true)}
     

=======
      setGoTo({
        pathname: "/signup" 
      });
     }
>>>>>>> e6dfb13 (Initial Commit)

  }
  if (goTo){
    return <Navigate to = {goTo.pathname} />
  }
  

  return (
    <div className="users">
      <h4>Sign In</h4>
    <div className="form">
    <div className="text_area">
      <input
<<<<<<< HEAD
      onKeyDown={(e) => {
        if (e.key === "Enter")
          handleSignin();
        }}
=======
>>>>>>> e6dfb13 (Initial Commit)
        id="email"
        type="text"
        className="text_input"
        placeholder="Email Address"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user.email}
        autoComplete="off"

      />
      </div>
      <div className="text_area">
      <input
<<<<<<< HEAD
      onKeyDown={(e) => {
        if (e.key === "Enter")
          handleSignin();
        }}
=======
>>>>>>> e6dfb13 (Initial Commit)
        id="password"
        type="password"
        className="text_input"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user.password}
        autoComplete="off"

      />
      </div>
      
      <button className= " btn " onClick={handleSignin}>Sign-in</button>
<<<<<<< HEAD
      {noUser===true &&(
    <p className="link" href="/signup">No user found!!</p>
  )}
  </div>
  {<a className="link" href="/signup">No account? Create one!</a>}
=======
  </div>
  <a className="link" href="/signup">Sign Up</a>
>>>>>>> e6dfb13 (Initial Commit)
     
    </div>
  )
}

export default Signin