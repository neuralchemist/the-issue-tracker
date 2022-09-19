import React from "react";
// mui 5
import Typography from "@mui/material/Typography";
// styled components
import { StyledHomeStack } from "./styledComponents";
// custom components
import IssueCard from "../IssueCard";

function AssignedIssues({ all_issue, user }) {
  const assigned_issues = all_issue?.filter(
    (issue) => user?.uid === issue.assigned_id
  );

  if (assigned_issues?.length === 0) {
    return <Typography mt={2} variant="h5">No issue assigned to you</Typography>;
  }

  return (
    <StyledHomeStack spacing={2}>
      {assigned_issues?.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </StyledHomeStack>
  );
}

export default AssignedIssues;
