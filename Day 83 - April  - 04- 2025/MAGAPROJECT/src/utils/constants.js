export const UserRoleEnum = {
  ADMIN: 'admin',
  PROJECT_ADMIN: 'project_admin',
  MEMBER: 'member',
};

export const AvailableUserRoles =
  Object.values(UserRoleEnum);

export const TaskStatusEnum = {
  TODO: 'todo',
  IN_PROGRESS: 'inprogress',
  DONE: 'done',
};

export const AvailableTaskStatus =
  Object.values(TaskStatusEnum);
