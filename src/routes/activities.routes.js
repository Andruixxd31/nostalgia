import { Router } from "express";
const router = Router();

import {
  createNote,
  listNotes,
  deleteNote,
  editNote,
} from "../controllers/activities.controllers.js";

router.post('/note', createNote);
router.get('/note', listNotes);
router.delete('/note', deleteNote);
router.patch('/note', editNote);

export default router;
