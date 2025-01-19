import express from "express"
import { createEntry, deleteEntry, getEntry, updateEntry } from "../controllers/journal.controller.js";
import authenticateToken  from "../middlewares/validateTokenHandler.js";

const router = express.Router();
router.use(authenticateToken)

router.get("/", authenticateToken, getEntry)

router.post("/", createEntry)

router.put("/:id",authenticateToken, updateEntry)

router.delete("/:id", deleteEntry)

export default router