import { Router } from "express";
const router = Router();

import {
  createActivity,
  listActivities,
  getActivity,
  deleteActivity,
  editActivity,
  markAsDone,
} from "../controllers/activities.controllers.js";

router.post('/note', createActivity);
router.get('/note', listActivities);
router.get('/note/:id', getActivity);
router.delete('/note/:id', deleteActivity);
router.patch('/note/:id', editActivity);
router.patch('/note/done/:id', markAsDone);

export default router;
