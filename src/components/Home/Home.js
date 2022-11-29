import { useEffect, useState } from "react";
// mui5
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// custom hooks
import { useGetAllCurrentIssues } from "./hooks/useGetAllCurrentIssues";
import { useUserConsumer } from "../../Firebase/firebase-auth";
// custom components
import AllIssues from "./AllIssues";
import CreatedIssues from "./CreatedIssues";
import AssignedIssues from "./AssignedIssues";
import SelectFilter from "./SelectFilter";
import IssueCardSkeleton from "../IssueCard/IssueCardSkeleton";
// styled components
import { StyledHomeStack } from "./styledComponents";
// firebase analytics
import { logEvent } from "firebase/analytics";
import { analytics } from "../../Firebase/firebase-config";

const skeleton_issues = [1, 2, 3, 4, 5, 6, 7, 8];

function Home() {
  // set filter value
  const [filterValue, setFilterValue] = useState("all");
  // get all current issue hook
  const all_current_issues_state = useGetAllCurrentIssues();
  //  get user hook
  const { user } = useUserConsumer();

  useEffect(() => {
    // send anlytics on home page visit
    logEvent(analytics, "screen_view", {
      firebase_screen: "homepage_visited",
    });
  }, []);

  // show skeleton while waiting for all current issues to load
  if (all_current_issues_state.isLoading) {
    return (
      <Container maxWidth="lg" component="main">
        <StyledHomeStack spacing={2}>
          {skeleton_issues.map((issue) => (
            <IssueCardSkeleton key={issue} />
          ))}
        </StyledHomeStack>
      </Container>
    );
  }
  // show error
  if (all_current_issues_state.isError) {
    return <Typography variant="h6">Sorry could not load issues...</Typography>;
  }

  // empty collection message
  if (
    all_current_issues_state.isSuccess &&
    all_current_issues_state.data.length === 0
  ) {
    return <Typography variant="h6">No document in the collection</Typography>;
  }

  return (
    <Container maxWidth="lg" component="main">
      {/* show filter only if user is signed in*/}
      {user && (
        <SelectFilter
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      )}
      {/* Stack of issue cards depending on filter value */}
      {filterValue === "created" ? (
        <CreatedIssues all_issue={all_current_issues_state?.data} user={user} />
      ) : filterValue === "assigned" ? (
        <AssignedIssues
          all_issue={all_current_issues_state?.data}
          user={user}
        />
      ) : (
        <AllIssues all_issue={all_current_issues_state?.data} />
      )}
    </Container>
  );
}

export default Home;
