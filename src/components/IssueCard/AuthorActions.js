import React from "react";
// styled components
import { StyledUserActions } from "./styledComponents";
// custom components
import AssigneeInfo from "./AssigneeInfo";
import EditButton from "../Home/EditButton";
import RemoveButton from "../Home/RemoveButton";

// author can remove resolved issue
function ResolvedIssue({ issue }) {
  return (
    <StyledUserActions>
      {/* author content */}
      <RemoveButton issue={issue} />
      {/* assignee content */}
      <AssigneeInfo assignee={issue.assigned_to} />
    </StyledUserActions>
  );
}

// author can edit unresolved Issue
function UnresolvedIssue({ issue }) {
  return (
    <StyledUserActions>
      {/* author content */}
      <EditButton issue={issue} />
      {/* assignee content */}
      <AssigneeInfo assignee={issue.assigned_to} />
    </StyledUserActions>
  );
}

/**
 * logged in user is the author.
 * author can edit unresolved issue and remove resolved issue
 * */
function AuthorActions({ issue }) {
  return (
    <>
      {issue.resolved ? (
        <ResolvedIssue issue={issue} />
      ) : (
        <UnresolvedIssue issue={issue} />
      )}
    </>
  );
}

export default AuthorActions;
