// react-hook-form
import { yupResolver } from "@hookform/resolvers/yup";
// firebase
import { serverTimestamp } from "@firebase/firestore";
// react-router-dom
import { useLocation } from "react-router-dom";
// custom components
import IssueForm from "../IssueForm";
// custom hooks
import { useUserConsumer } from "../../Firebase/firebase-auth";
import { useGetAllUsers } from "./hooks/useGetAllUsers";
import { useUpdateIssue } from "./hooks/useUpdateIssue";
// custom utils
import {
  schema,
  getOptionsFromAllUsers,
  extractAssignedTo,
  extractStatus,
} from "../IssueForm/utils";

function Form() {
  // react-router-logic
  const location = useLocation();
  const { issue } = location.state;

  // extract default values from issue
  let defaultValues = {
    assigned_id: issue.assigned_id,
    title: issue.title,
    description: issue.description,
    priority: issue.priority,
  };

  let resolver = yupResolver(schema);

  // options
  let all_users_options, all_users;

  // custom hook to get current user
  const current_user_state = useUserConsumer();

  // custom hook to fetch users
  const all_users_state = useGetAllUsers();
  // custom hook to update issue
  const update_issue_state = useUpdateIssue();

  // wait for all users
  if (all_users_state.isLoading) {
    return <p>Loading users...</p>;
  }

  // create user options from all users
  if (all_users_state.isSuccess) {
    all_users = all_users_state?.data;
    all_users_options = getOptionsFromAllUsers(
      all_users,
      current_user_state.user
    );
  }

  const isError =
    all_users_state.isError || update_issue_state.isError || false;
  const errorMessage = all_users_state.error || update_issue_state.error || "";

  // submit
  const onSubmit = (data) => {
    let assigned_user = extractAssignedTo(all_users, data.assigned_id);

    let values = {
      ...data,
      last_edited: serverTimestamp(),
      assigned_to: assigned_user.displayName,
      status: extractStatus(data.priority, issue.resolved),
    };

    // update to firestore collection
    update_issue_state.mutate({ id: issue.id, data: values });

    // will be redirectd to home page by onSuccess by useMutation
  };

  return (
    <IssueForm
      defaultValues={defaultValues}
      resolver={resolver}
      onSubmit={onSubmit}
      isDisabled={update_issue_state.isLoading}
      isError={isError}
      errorMessage={errorMessage}
      all_users_options={all_users_options}
      submitButtonName="Edit"
    />
  );
}

export default Form;
