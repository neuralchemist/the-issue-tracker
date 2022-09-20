import { object, string } from "yup";



export const schema = object({
  title: string().max(100, "too long").required("Required"),
  description: string().max(400, "too long").required("Required"),
  priority: string().required("Required"),
  assigned_id: string().required("Required"),
});


export function getOptionsFromAllUsers(all_users, current_user) {
  // filter current user from all users
  let other_users = all_users.filter((user) => user.id !== current_user.uid);
  // convert to format suitable for dropdown
  let options = other_users.map((user) => ({
    label: user.displayName,
    value: user.id,
  }));

  return options;
}

export function extractAssignedTo(all_users, assigned_id) {
  /**
   * extract  assigned_to  user using assigned_id from all_users
   */
  let assigned_to = all_users.find((user) => user.id === assigned_id);

  return assigned_to;
}

export function extractStatus(priority, resolved) {
  if (resolved) {
    return 0;
  }
  switch (priority) {
    case "low":
      return 1;
    case "medium":
      return 2;
    case "high":
      return 3;
    default:
      return 3;
  }
}

