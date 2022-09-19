// mui 5
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor:  theme.palette.divider,

  // ------DEBUG--------
  //   border: "1px dashed blue",
}));

export const StyledIcon = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  // ------DEBUG--------
//   border: "1px dashed blue",
}));


export const StyledAvatar = styled(Avatar)(({ theme }) => ({
	color: theme.palette.text.secondary,
	width: theme.spacing(4),
	height: theme.spacing(4),
  // ------DEBUG--------
//   border: "1px dashed blue",
}));
