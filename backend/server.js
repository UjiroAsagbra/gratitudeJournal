import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import userRoute from './routes/user.route.js'
import entryRoute from './routes/journal.route.js'
import cors from 'cors'
<<<<<<< HEAD
import path from 'path'
=======
>>>>>>> e6dfb13 (Initial Commit)


dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001
<<<<<<< HEAD
const __dirname = path.resolve()
=======
>>>>>>> e6dfb13 (Initial Commit)

app.use(cors())

app.use(express.json())


app.use("/api/entry", entryRoute)
app.use("/api/users", userRoute)

<<<<<<< HEAD
if(process.env.NODE_ENV ==="production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")))

  app.get("*", (req,res)=> {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))

  })
}

=======
>>>>>>> e6dfb13 (Initial Commit)


app.listen(PORT, () => {
  connectDB()
  console.log(`Server started at http://localhost:${PORT}`);
})


