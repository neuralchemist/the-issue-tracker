import React from "react";
// mui 5
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import UndoIcon from "@mui/icons-material/Undo";
// firebase
import { serverTimestamp } from "@firebase/firestore";
// custom utils
import { extractStatus } from "../IssueForm/utils";
// custom hooks
import { useUpdateIssue } from "./hooks/useUpdateIssue";

function ToggleResolveButton({ issue }) {
  // custom update hook
  const update_issue_state = useUpdateIssue();

  // mui5 icons
  const icon_content = issue.resolved ? <UndoIcon /> : <DoneIcon />;
  const label_content = issue.resolved ? "Undo" : "Done";

  const handleClick = () => {
    const data = {
      resolved: !issue.resolved,
      last_edited: serverTimestamp(),
      status: extractStatus(issue.priority, !issue.resolved),
    };

    update_issue_state.mutate({
      id: issue.id,
      data,
    });

    // redirected to home page onSuccess by useMutate to show updated content
  };
  return (
    <Button
      size="small"
      color="info"
      variant="outlined"
      startIcon={icon_content}
      onClick={handleClick}
      disabled={update_issue_state.isLoading}
      sx={{width: '120px'}}
    >
      {label_content}
    </Button>
  );
}

export default ToggleResolveButton;
