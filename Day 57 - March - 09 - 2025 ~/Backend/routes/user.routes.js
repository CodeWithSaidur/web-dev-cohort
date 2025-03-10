import express from "express";
import { registerUser } from "../controller/user.controller";

const router = express.Router();

router.get('/register',registerUser)

export default router;
