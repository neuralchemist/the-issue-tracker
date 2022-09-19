// mui5
import CssBaseline from "@mui/material/CssBaseline";
// react-router-dom
import { NavLink } from "react-router-dom";
// custom routes
import { ACCOUNT } from "../Common/routes";
// styled components
import { StyledAvatar } from "./styledComponents";

function AccountComponent({ label }) {
  const avatarName = label ? label.slice(0, 1).toUpperCase() : "";
  let activeStyle = {
    textDecoration: "none",
    borderBottom: "2px solid white",
    paddingBottom: "12px",
  };

  let inactiveStyle = {
    textDecoration: "none",
  };

  return (
    <NavLink
      to={ACCOUNT}
      style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
    >
      <CssBaseline />
      <StyledAvatar>{avatarName}</StyledAvatar>
    </NavLink>
  );
}

export default AccountComponent;
