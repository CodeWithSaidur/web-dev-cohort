import mongoose, { Schema } from 'mongoose';
// ProjectNote.model.js
const ProjectNoteSchema = new mongoose.Schema(
  {
    project: {
      type: Schema.Types.ObjectId, // 404 // who give power of type
      ref: 'Project',
      required: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    content: {
      type: String,
      required : true
    },
  },
  {
    timestamps: true,
  },
);

export const ProjectNote = mongoose.model('ProjectNote', ProjectNoteSchema);
