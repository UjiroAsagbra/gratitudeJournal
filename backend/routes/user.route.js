import express from 'express'
import { Signup, Signin, currentUser, Logout } from '../controllers/user.controller.js'
import authenticateToken from '../middlewares/validateTokenHandler.js'

const router = express.Router()


router.post("/signup", Signup)
router.post("/signin", Signin)
router.get("/current", authenticateToken, currentUser )
router.post('/logout', Logout)

export default router