const { Schema, model } = require('mongoose');

const ActivitySchema = new Schema({
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
  }

}, {
  timestamps: true
});

module.exports = model('Activity', ActivitySchema);
