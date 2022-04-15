import React from "react";
// mui5
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// custom components
import Header from "./Header";
import Form from "./Form";
import Copyright from "../Common/Copyright";
import Footer from "../Common/Footer";
// custom routes
import { SIGNIN } from "../Common/routes";

function SignUp() {
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
        <Footer message="Already have an account? Sign in" to={SIGNIN} />
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignUp;
