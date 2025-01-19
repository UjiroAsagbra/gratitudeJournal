import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import userRoute from './routes/user.route.js'
import entryRoute from './routes/journal.route.js'
import cors from 'cors'


dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001

app.use(cors())

app.use(express.json())


app.use("/api/entry", entryRoute)
app.use("/api/users", userRoute)



app.listen(PORT, () => {
  connectDB()
  console.log(`Server started at http://localhost:${PORT}`);
})


