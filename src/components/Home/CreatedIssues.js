import React from "react";
// mui 5
import Typography from "@mui/material/Typography";
// styled components
import { StyledHomeStack } from "./styledComponents";
// custom components
import IssueCard from "../IssueCard";

function CreatedIssues({ all_issue, user }) {
  const created_issues = all_issue?.filter(
    (issue) => user?.uid === issue.author_id
  );

  if (created_issues?.length === 0) {
    return (
      <Typography mt={2} variant="h5">
        No issue created by you
      </Typography>
    );
  }

  return (
    <StyledHomeStack spacing={2}>
      {created_issues?.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </StyledHomeStack>
  );
}

export default CreatedIssues;
