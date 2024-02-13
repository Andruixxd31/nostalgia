import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  timesDone: {
    type: Number,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value!'
    },
    required: true,
  },
  tags: {
    type: [String],
  },
  goal: {
    type: Number
  },
  lasTimeDone: {
    type: Date
  }
}, {
  timestamps: true
});


export default mongoose.model("Activity", ActivitySchema, "activities");
