// mui 5
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledEditIssue = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "background.paper",
  borderRadius: 1,
  paddingX: 1,
}));
