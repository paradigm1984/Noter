// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
const NoteSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  body: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
});

// Create the Note model with the NoteSchema
const Note = mongoose.model("Note", NoteSchema);

// Export the model
module.exports = Note;