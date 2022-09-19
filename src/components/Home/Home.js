import { useState } from "react";
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

function Home() {
  // set filter value
  const [filterValue, setFilterValue] = useState("all");
  // get all current issue hook
  const all_current_issues_state = useGetAllCurrentIssues();
  //  get user hook
  const { user } = useUserConsumer();

  // wait for all current issues to load
  if (all_current_issues_state.isLoading) {
    return <Typography variant="h6">Loading...</Typography>;
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
