import React from "react";
// mui5
import Container from "@mui/material/Container";
// custom components
import Header from "./Header";
import Form from "./Form";
import Copyright from "../Common/Copyright";
import Footer from "../Common/Footer";
// custom routes
import { SIGNIN } from "../Common/routes";
// styled components
import { StyledSignUp } from "./styledComponents";

function SignUp() {
  return (
    <Container maxWidth="xs" component="main">
      <StyledSignUp
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <Form />
        <Footer message="Already have an account? Sign in" to={SIGNIN} />
        <Copyright />
      </StyledSignUp>
    </Container>
  );
}

export default SignUp;
