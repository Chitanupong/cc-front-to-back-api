import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { loginrSchema, registerSchema, validate } from "../validations/validator.js";


const router = express.Router()

// ENDPOINT http://localhost:8000/auth/register
router.post("/register", validate(registerSchema), register)
router.post("/login",validate(loginrSchema),login)

export default router