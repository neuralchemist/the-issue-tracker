// mui 5
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledSignIn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(8),
}));
