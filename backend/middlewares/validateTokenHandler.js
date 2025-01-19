import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'; // Adjust path to your User model

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const authToken = authHeader && authHeader.split(" ")[1];
  

  if (!authToken) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
    const decodedToken = jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET);
    
    
    const user = await User.findById(decodedToken.user.id); // Find user without password

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    req.user = user; // Attach user to request object
    next();
  } catch (err) {
    console.error("Token validation error:", err);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};
export default authenticateToken