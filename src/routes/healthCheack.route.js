import { Router } from "express";
import {healthCheack} from "../controllers/healthCheack.controller.js";


const router = Router()

router.route("/").get(healthCheack)


export default router
