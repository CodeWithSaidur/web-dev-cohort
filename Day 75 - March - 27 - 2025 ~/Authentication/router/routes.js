// routes.js
import express from "express";
import { registerUser } from "../controller/user.controller.js";

//Import all controllers from controllers

export const routers = express.Router();

routers.post("/save", registerUser);
