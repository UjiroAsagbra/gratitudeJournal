import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'


export const Signup = async(req, res) => {
  const {username, email, password} = req.body;
  
  
  if(!username || !email || !password) {
    res.status(400).json({message: "All fields required"})
  }
  
     
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = { username: username, email: email, password: hashedPassword }

    const newUser = new User(user)
    await newUser.save();

    const authToken = jwt.sign({ id: newUser._id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1h'})

      res.status(201).json({ authToken, user: newUser });
    } catch (error) {
      console.error("error adding user:", error.message);
       if (!res.headersSent) {
      return res.status(500).json({ message: 'Error registering new user' });
    };
    }
}
  export const Signin = async(req, res) => {
    try {
      const {email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ success: false, message: "All fields required" });
      }
  
      const user = await User.findOne({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        
        const authToken = jwt.sign({
          user: {
            id: user.id,
            username: user.username,
            email: user.email       
          },
        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'
        })
        res.json({success: true, authToken: authToken})
        } else {
          res.status(400).json({success: false, message: "Invalid credentials"})}

       
  
      
      
    } catch (error) {
      console.error("Error in signin route:", error.message);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }}

    export const currentUser = async (req, res) => {
      res.json(req.user);
    };

    

    export const Logout = (req, res) => {
      const authTokenBlacklist = new Set(); 
      const authToken = req.headers.authorization?.split(" ")[1];
    
      try {
        if (authToken) {
          authTokenBlacklist.add(authToken); 
          return res.status(200).json({ success: true, message: 'Logged out successfully' });
        } else {
          return res.status(400).json({ success: false, message: 'No token provided' });
        }
      } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ success: false, message: 'Failed to log out' });
      }
    };
    