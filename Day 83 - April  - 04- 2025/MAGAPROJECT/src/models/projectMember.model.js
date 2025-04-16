import mongoose, { Schema } from 'mongoose';
import { AvailableUserRoles, UserRoleEnum } from '../utils/constants.js';
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
      enum: AvailableUserRoles,  // serf array k lyea 
      default:  UserRoleEnum.MEMBER  // kisi 1 element k lyea
    },
  },
  {
    timestamps: true,
  }
);

export const ProjectMember = mongoose.model(
  'ProjectMember',
  ProjectMemberSchema
);
