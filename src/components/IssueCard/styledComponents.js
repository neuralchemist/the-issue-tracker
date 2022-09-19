// mui 5
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import Box from '@mui/material/Box';


export const StyledCard = styled(Card)(({ theme }) => ({
  // mobile
  width: "100%",
  maxWidth: "345px",
  minHeight: "100px",
  borderRadius: theme.spacing(2),

  // tablet
  [theme.breakpoints.up("sm")]: {
    maxWidth: "545px",
  },

  // desktop
  [theme.breakpoints.up("md")]: {
    maxWidth: "745px",
  },

  // ------DEBUG--------
  // border: "1px dashed red",
}));

export const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  // ------DEBUG--------
  // border: "1px dashed blue",
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  // mobile
  display: "flex",
  alignItems: "flex-end",
  // tablet / desktop
  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
  },
  // ------DEBUG--------
  // border: "1px dashed pink",
}));

export const StyledUserActions = styled(Box)(({ theme }) => ({
  // mobile
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(1),

  // tablet / desktop
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // ---DEBUG---
  // border: '1px dashed green'
}));


export const StyledUserInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evently",
  alignItems: "center",
  gap: theme.spacing(2),

  // ---DEBUG---
  // border: '1px dashed blue'
}));




export const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
