import React from "react";
// mui5
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// helper functions
import Header from "../Common/Header";
import Form from "./Form";
import Copyright from "../Common/Copyright";

function CreateIssue() {
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
        <Header heading="Create Issue"/>
        <Form />
        <Copyright />
      </Box>
    </Container>
  );
}

export default CreateIssue;
