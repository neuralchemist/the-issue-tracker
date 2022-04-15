import React from "react";
// mui 5
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
// custom hooks
import { useRemoveIssue } from "./hooks/useRemoveIssue";

function RemoveButton({ issue }) {
  // custom hook to remove issue
  let delete_issue_state = useRemoveIssue();

  const handleClick = () => {
    // remove issue
    delete_issue_state.mutate(issue.id);

    // redirected to home page onSuccess by useMutate to show updated content
  };
  return (
    <Button
      size="small"
      color="secondary"
      variant="contained"
      startIcon={<EditIcon />}
      onClick={handleClick}
      disabled={delete_issue_state.isLoading}
    >
      Remove
    </Button>
  );
}

export default RemoveButton;
