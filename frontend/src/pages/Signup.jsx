import {useState} from  "react"
import { useUserSignup } from "../users/signup"
import {Navigate} from "react-router-dom"
import validator from 'validator'

const Signup = () => {
 
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [emailMessage, setEmailMessage] = useState("")
  const [passwordMessage, setPasswordMessage] = useState("")



// Email Validation
const validateEmail = (email) => {
  if (validator.isEmail(email)) {
    setEmailMessage("")
  } else {
    setEmailMessage('Enter valid Email!')
  }


  }
  const validatePassword = (password) => { 
  
    if (validator.isStrongPassword(password, { 
        minLength: 8, minLowercase: 1, 
        minUppercase: 1, minNumbers: 1, minSymbols: 1 
    })) {  
      setPasswordMessage("")
    } else { 
      setPasswordMessage('Password Is Not Strong ') 
    } 
} 
  const [goTo, setGoTo] = useState(null)
  const {createUser} = useUserSignup()

  const handleSignup = async () => {
    
      const { success } = await createUser(newUser);
      if(success){
        setGoTo({
          pathname: "/entrylist" 
        })

      }
       
        
        
      
  };
  
  if (goTo){
    return <Navigate to = {goTo.pathname} />
  }

  

  return (
    <div className="users">
      <h4>Sign Up</h4>
      <div className="form">
      <div className="text_area">
    <input
    onKeyDown={(e) => {
      if (e.key === "Enter")
        handleSignup();
      }}
        id="name"
        type="text"
        className="text_input"
        placeholder="Username"
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        value={newUser.username}
        autoComplete="off"

      />
      </div>
       <div className="text_area">
      <input
       onKeyDown={(e) => {
        if (e.key === "Enter")
          handleSignup();
        }}
        id="email"
        type="text"
        className="text_input"
        placeholder="Email Address"
        onChange={(e) => {
          const email = e.target.value
        setNewUser({ ...newUser, email})
        validateEmail(email)}
      }
        value={newUser.email}
        autoComplete="off"

      />
      </div>
       <p>{emailMessage}</p>
      <div className="text_area">
      <input
       onKeyDown={(e) => {
        if (e.key === "Enter")
          handleSignup();
        }}
        id="password"
        type="password"
        className="text_input"
        placeholder="Password"
        onChange={(e) => {
          const password = e.target.value
        setNewUser({ ...newUser, password})
        validatePassword(password)}
      }
        value={newUser.password}
        autoComplete="off"

      />
      </div>
      <p>{passwordMessage}</p>
      <button className= " btn " onClick={handleSignup}>Signup</button>
    </div>
    <a className="link" href="/">Sign In</a>
  </div>
  )
}

export default Signup