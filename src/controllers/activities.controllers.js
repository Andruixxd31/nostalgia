import Activity from "../models/activity.js"

export const createNote = async (req, res) => {
  try {

    console.log(req.body);
    const { title, timesDone, tags, goal, lastTimeDone } = req.body;
    await Activity.create({
      title: title,
      timesDone: timesDone,
      tags: tags,
      goal: goal,
      lastTimeDone: lastTimeDone,
    })
    res.status(200).json({
      status: "success",
      message: "activity created"
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

export const editNote = async (req, res) => {
  const { } = req.body;
}

export const deleteNote = async (req, res) => {
  const { } = req.body;
}

export const listNotes = async (req, res) => {
  const { } = req.body;
}

