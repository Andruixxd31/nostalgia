import mongoose from "mongoose";
import Activity from "../models/activity.js"

export const createActivity = async (req, res) => {
  try {
    const { title, timesDone, tags, goal, lastTimeDone } = req.body;
    const activity = await Activity.create({
      title: title,
      timesDone: timesDone,
      tags: tags,
      goal: goal,
      lastTimeDone: lastTimeDone,
    })
    res.status(201).json({
      status: "success",
      message: "activity created",
      data: activity
    });
    return;
  } catch (error) {
    res.status(400).json({
      status: "unsuccesful",
      message: "activity could not be created",
      error: error
    });
  }
  return
}

export const listActivities = async (_, res) => {
  const activities = await Activity.find();
  if (!activities) {
    res.status(404).json({
      status: "unsuccesful",
      message: "No activities found",
    });

  }

  res.status(200).json({
    status: "succes",
    message: "activities retrieved",
    data: activities
  });
}

export const getActivity = async (req, res) => {
  const activityId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(activityId)) {
    return res.status(400).json({ error: 'Invalid ObjectId' });
  }

  const activity = await Activity.findById(activityId);
  if (!activity) {
    res.status(404).json({
      status: "unsuccesful",
      message: "Activity not found",
    });
    return;
  }

  res.status(200).json({
    status: "succes",
    message: "activity retrieved",
    data: activity
  });
}

export const editActivity = async (req, res) => {
  //TODO: 
  //Get document
  //replace fields to be updated
  //set the new document as the object
  const activityId = req.params.id
}

export const markAsDone = async (req, res) => {
  const activityId = req.params.id
  if (!mongoose.Types.ObjectId.isValid(activityId)) {
    return res.status(400).json({ error: 'Invalid ObjectId' });
  }

  const activity = await Activity.findById(activityId);
  activity.timesDone += 1;
  activity.save();
  res.status(200).json({
    status: "succes",
    message: "activity retrieved",
    data: activity
  });
  return;

}

export const deleteActivity = async (req, res) => {
  const activityId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(activityId)) {
    return res.status(400).json({ error: 'Invalid ObjectId' });
  }

  const deletedActivity = await Activity.findByIdAndDelete(activityId);

  res.status(200).json({
    status: "succes",
    message: "activity deleted",
    data: deletedActivity
  });
}

