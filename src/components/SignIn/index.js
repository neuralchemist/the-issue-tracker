// mui5
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// custom components
import Header from "./Header";
import Form from "./Form";
import Copyright from "../Common/Copyright";
import Footer from "../Common/Footer";
// custom routes
import { SIGNUP } from "../Common/routes";

function SignIn() {
  return (
    <Container maxWidth="xs" component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <Form />
        <Footer message="Don't have and account? Sign Up" to={SIGNUP} />
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignIn;
