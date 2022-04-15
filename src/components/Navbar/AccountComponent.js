// mui5
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
// react-router-dom
import { NavLink } from "react-router-dom";
// custom routes
import { ACCOUNT } from "../Common/routes";

function AccountComponent({ label }) {
  const avatarName = label ? label.slice(0, 1).toUpperCase() : "";
  let activeStyle = {
    textDecoration: "none",
    borderBottom: "2px solid white",
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
      <Avatar sizes="medium"   sx={{backgroundColor: 'background.default', color: 'primary.main', marginBottom: '8px'}} >{avatarName}</Avatar>
    </NavLink>
  );
}

export default AccountComponent;
