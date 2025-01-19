import {useState} from  "react"
import { useUserSignup } from "../users/signup"
import {Navigate} from "react-router-dom"
import '../components/css/login.css'


const Signin = () => {
 
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
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
      setGoTo({
        pathname: "/signup" 
      });
     }

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
  </div>
  <a className="link" href="/signup">Sign Up</a>
     
    </div>
  )
}

export default Signin