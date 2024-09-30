import express from "express"
import { createUser, getUsers } from "handlers/user"
import morgan from "morgan"
import fs from "node:fs"

const router = express.Router()

// api only middleware
router.use(morgan("dev"))

// routes
router.get("/hello", async (req, res) => {
  res.send({ message: "hello world!" })
})

router.get("/users", getUsers)
router.post("/user", createUser)

// router.use("/group", group) // can split into separate files for organization

export default router