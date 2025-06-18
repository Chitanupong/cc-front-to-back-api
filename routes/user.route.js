import express from "express";
import {
  listUser,
  readUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
const router = express.Router()

// ENDPOINT http://localhost:8000/api/users
router.get("/users", listUser)

router.get("/user", readUser)

router.post("/user", createUser)

router.patch("/user/role/:id",updateUser)

router.delete("/user/:id",deleteUser)
export default router