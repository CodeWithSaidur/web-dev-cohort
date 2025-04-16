import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controllers.js";
const router = Router();

router.route("/register").get(healthCheck);

export default router;
