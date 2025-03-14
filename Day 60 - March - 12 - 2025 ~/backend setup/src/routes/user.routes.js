import express from "express";
import { saveuser } from "../controllers/user.controller.js";

export const saveRouter = express.Router(); // Changed from `router` to `saveRouter`

saveRouter.post("/save", saveuser);

export default saveRouter;
