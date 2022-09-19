import React from "react";
// styled components
import { StyledUserActions } from "./styledComponents";
// custom components
import AuthorInfo from "./AuthorInfo";
import ToggleResolveButton from "../Home/ToggleResolveButton";

/**
 * Logged is user is the Assignee ie. issue is assigned to.
 * assignee can resolve or unresolve an issue
 */
function AssigneeActions({ issue }) {
  return (
    <StyledUserActions>
      {/* assignee content */}
      <ToggleResolveButton issue={issue} />
      {/* author content */}
      <AuthorInfo author={issue.author} />
    </StyledUserActions>
  );
}

export default AssigneeActions;
