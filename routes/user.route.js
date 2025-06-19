import express from "express";
import {
  listUser,
  readUser,
  createUser,
  updateRoleUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { authCheck } from "../middleware/auth.middleware.js"; 
const router = express.Router()

// ENDPOINT http://localhost:8000/api/users
router.get("/users",authCheck, listUser);
router.patch("/user/role/:id",authCheck,updateRoleUser);
router.delete("/user/:id",authCheck,deleteUser);



router.get("/user", readUser)
router.post("/user", createUser)

export default router