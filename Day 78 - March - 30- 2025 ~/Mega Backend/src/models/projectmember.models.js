import mongoose, { Schema } from 'mongoose';
import { AvailableUserRoles, UserRolesEnum } from '../utils/constants.js';
// ProjectMember.model.js
const ProjectMemberSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    role: {
      type: String,
      enum: AvailableUserRoles,
      default: UserRolesEnum.MEMBER,
    },
  },
  {
    timestamps: true,
  },
);

export const ProjectMember = mongoose.model('ProjectMember', ProjectMemberSchema);
