import { Router } from "express";
const router = Router();

import {
  signup,
} from "../controllers/auth.controllers.js";

router.post('/user', signup);

export default router;
