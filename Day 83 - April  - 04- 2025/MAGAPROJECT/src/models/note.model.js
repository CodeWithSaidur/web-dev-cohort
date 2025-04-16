import mongoose, { Schema } from 'mongoose';
// Note.model.js
const NoteSchema = new mongoose.Schema(
  {
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project', // ?
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Note = mongoose.model('Note', NoteSchema);
