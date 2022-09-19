import { useState } from "react";
// mui 5
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// styled components
import { StyledCard, StyledCardHeader } from "./styledComponents";
import { StyledCardActions, ExpandMore } from "./styledComponents";
// custom components
import CollapseDetails from "./CollapseDetails";
import PriorityContent from "./PriorityContent";
import AnonymousActions from "./AnonymousActions";
import AssigneeActions from "./AssigneeActions";
import AuthorActions from "./AuthorActions";
// custom hooks
import { useUserConsumer } from "../../Firebase/firebase-auth";

/**
 * Show information about the issue.
 * 
 * Card actions depends on weather the user is Anonymous, 
 * Author or Assignee.
 * 
 * Anonymous - user not logged in
 * Author   -  created the issue
 * Assignee -  issue assigned to.
 */

function IssueCard({ issue }) {
  //  get user hook
  const { user } = useUserConsumer();
  // use to collapse / expande issue details
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard>
      {/* header */}
      <StyledCardHeader
        avatar={<PriorityContent issue={issue} />}
        title={issue.title}
        subheader={new Date(issue.created_on.toDate()).toDateString()}
      />

      {/* actions */}
      <StyledCardActions disableSpacing>
        {user?.uid === issue.author_id ? (
          <AuthorActions issue={issue} />
        ) : user?.uid === issue.assigned_id ? (
          <AssigneeActions issue={issue} />
        ) : (
          <AnonymousActions issue={issue} />
        )}

        {/* expand icon */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </StyledCardActions>

      {/* collapse detials */}
      <CollapseDetails expanded={expanded} issue={issue} />
    </StyledCard>
  );
}

export default IssueCard;
