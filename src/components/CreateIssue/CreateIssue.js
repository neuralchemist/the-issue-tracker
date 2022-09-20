import React from "react";
// mui5
import Container from "@mui/material/Container";
// helper functions
import Header from "../Common/Header";
import Form from "./Form";
import Copyright from "../Common/Copyright";
// custom components
import { StyledCreateIssue } from "./styledComponents";

function CreateIssue() {
  return (
    <Container maxWidth="xs" component="main">
      <StyledCreateIssue>
        <Header heading="Create Issue" />
        <Form />
        <Copyright />
      </StyledCreateIssue>
    </Container>
  );
}

export default CreateIssue;
