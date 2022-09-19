import React from "react";
// styled components
import { StyledHomeStack } from "./styledComponents";
// custom components
import IssueCard from "../IssueCard";

function AllIssues({ all_issue }) {
  return (
    <StyledHomeStack spacing={2}>
      {all_issue?.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </StyledHomeStack>
  );
}

export default AllIssues;
