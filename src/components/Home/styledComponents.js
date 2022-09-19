// mui 5
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export const StyledHomeStack = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(4, 0),

  // ---DEBUG---
  //   border: '1px dashed blue'
}));

export const StyledFilter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(4),

  // ---DEBUG---
  //   border: '1px dashed blue'
}));
