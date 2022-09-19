import React from "react";
// styled components
import { StyledUserActions } from "./styledComponents";
// custom components
import AuthorInfo from "./AuthorInfo";
import AssigneeInfo from "./AssigneeInfo";

/**
 * No user is logged in.
 * show information about author and assignee
 */
function AnonymousActions({ issue }) {
  return (
    <StyledUserActions>
      <AuthorInfo author={issue.author} />
      <AssigneeInfo assignee={issue.assigned_to} />
    </StyledUserActions>
  );
}

export default AnonymousActions;
