// custom components
import React from "react";
// mui5
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// helper functions
import Header from "../Common/Header";
import Form from "./Form";
import Copyright from "../Common/Copyright";

function EditIssue() {
  return (
    <Container maxWidth="xs" component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "background.paper",
          borderRadius: 1,
          paddingX: 1,
        }}
      >
        <Header heading="Edit Issue"/>
        <Form />
        <Copyright />
      </Box>
    </Container>
  );
}

export default EditIssue;
