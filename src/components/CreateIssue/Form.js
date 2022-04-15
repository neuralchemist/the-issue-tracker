// react-hook-form
import { yupResolver } from "@hookform/resolvers/yup";
// firebase
import { serverTimestamp } from "@firebase/firestore";
// custom components
import IssueForm from "../IssueForm";
// custom hooks
import { useUserConsumer } from "../../Firebase/firebase-auth";
import { useGetAllUsers } from "./hooks/useGetAllUsers";
import { useCreateIssue } from "./hooks/useCreateIssue";
// custom utils
import {
  schema,
  getOptionsFromAllUsers,
  extractAssignedTo,
  extractStatus,
} from "../IssueForm/utils";

const defaultValues = {
  title: "",
  description: "",
  priority: "",
  assigned_id: "",
};

let resolver = yupResolver(schema);

function Form() {
  // options
  let all_users_options, all_users;

  // custom hook to get current user
  const current_user_state = useUserConsumer();

  // custom hook to fetch users
  const all_users_state = useGetAllUsers();
  // custom hook to create issue
  const create_issue_state = useCreateIssue();

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
    all_users_state.isError || create_issue_state.isError || false;
  const errorMessage = all_users_state.error || create_issue_state.error || "";

  // submit
  const onSubmit = (data) => {
    let assigned_user = extractAssignedTo(all_users, data.assigned_id);

    let values = {
      ...data,
      author: current_user_state.user.displayName,
      author_id: current_user_state.user.uid,
      created_on: serverTimestamp(),
      last_edited: serverTimestamp(),
      resolved: false,
      assigned_to: assigned_user.displayName,
      status: extractStatus(data.priority, false),
    };

    // add to firestore collection
    create_issue_state.mutate(values);

    // will be redirectd to home page by onSuccess by useMutation
  };

  return (
    <IssueForm
      defaultValues={defaultValues}
      resolver={resolver}
      onSubmit={onSubmit}
      isDisabled={create_issue_state.isLoading}
      isError={isError}
      errorMessage={errorMessage}
      all_users_options={all_users_options}
      submitButtonName="Create"
    />
  );
}

export default Form;
