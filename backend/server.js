import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import userRoute from './routes/user.route.js'
import entryRoute from './routes/journal.route.js'
import cors from 'cors'
import path from 'path'


dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()

app.use(cors())

app.use(express.json())


app.use("/api/entry", entryRoute)
app.use("/api/users", userRoute)

if(process.env.NODE_ENV ==="production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")))

  app.get("*", (req,res)=> {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))

  })
}



app.listen(PORT, () => {
  connectDB()
  console.log(`Server started at http://localhost:${PORT}`);
})


