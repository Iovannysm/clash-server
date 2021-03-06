const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema(
  {
    
    content: String,

    game: {
      type: mongoose.Types.ObjectId,
      ref: "Game",
      required: true,
    },
    
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true
    },
    attendees: [{
      type: mongoose.Types.ObjectId,
      ref: "User",
    }],
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;