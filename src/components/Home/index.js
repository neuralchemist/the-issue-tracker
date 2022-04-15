// mui5
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// custom hooks
import { useGetAllCurrentIssues } from "./hooks/useGetAllCurrentIssues";
// custom components
import IssueCard from "./IssueCard";

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
    return <p>No document in the collction</p>;
  }

  return (
    <Container maxWidth="lg" component="main">
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        sx={{
          marginTop: 8,
        }}
      >
        {all_current_issues_state?.data?.map((issue) => (
          <Grid item key={issue.id} xs={12} sm={6} md={4}>
            <IssueCard issue={issue} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
