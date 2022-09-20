// custom components
import React from "react";
// mui5
import Container from "@mui/material/Container";
// helper functions
import Header from "../Common/Header";
import Form from "./Form";
import Copyright from "../Common/Copyright";
// custom components
import { StyledEditIssue } from "./styledComponents";

function EditIssue() {
  return (
    <Container maxWidth="xs" component="main">
      <StyledEditIssue>
        <Header heading="Edit Issue" />
        <Form />
        <Copyright />
      </StyledEditIssue>
    </Container>
  );
}

export default EditIssue;
