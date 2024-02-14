import { Router } from "express";
const router = Router();

import {
  signup,
  login,
  logout,
  deleteUser,
} from "../controllers/auth.controllers.js";

router.post('/user', signup);
router.get('/user', login);
router.get('/user', logout);
router.delete('/user', deleteUser);

export default router;
