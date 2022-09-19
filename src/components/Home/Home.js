// mui5
import Container from "@mui/material/Container";
// custom hooks
import { useGetAllCurrentIssues } from "./hooks/useGetAllCurrentIssues";
// custom components
import IssueCard from "../IssueCard";
// styled components
import { StyledHomeStack } from "./styledComponents";

function Home() {
  // get all current issue hook
  const all_current_issues_state = useGetAllCurrentIssues();

  // wait for all current issues to load
  if (all_current_issues_state.isLoading) {
    return <p>Loading...</p>;
  }
  // show error
  if (all_current_issues_state.isError) {
    return <p>Sorry could not load issues...</p>;
  }

  // empty collection message
  if (
    all_current_issues_state.isSuccess &&
    all_current_issues_state.data.length === 0
  ) {
    return <p>No document in the collection</p>;
  }


  return (
    <Container maxWidth="lg" component="main">
      {/* Stack of column */}
      <StyledHomeStack spacing={2}>
        {all_current_issues_state?.data?.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </StyledHomeStack>
    </Container>
  );
}

export default Home;
