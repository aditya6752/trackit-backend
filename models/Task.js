const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        max: 500,
        required: true,
      },
      completion: {
        type: Boolean,
        default: false
      },
      dateOfCompletion: {
        type: String,
      }
    },
    { timestamps: true }
  );
module.exports = mongoose.model("Task", TaskSchema);