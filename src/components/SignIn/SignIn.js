// mui5
import Container from "@mui/material/Container";
// custom components
import Header from "./Header";
import Form from "./Form";
import Copyright from "../Common/Copyright";
import Footer from "../Common/Footer";
// custom routes
import { SIGNUP } from "../Common/routes";
// styled components
import { StyledSignIn } from "./styledComponents";

function SignIn() {
  return (
    <Container maxWidth="xs" component="main">
      <StyledSignIn
      >
        <Header />
        <Form />
        <Footer message="Don't have and account? Sign Up" to={SIGNUP} />
        <Copyright />
      </StyledSignIn>
    </Container>
  );
}

export default SignIn;
