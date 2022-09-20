// mui5
import Button from "@mui/material/Button";
// react-router-dom
import { NavLink } from "react-router-dom";

function LinkComponent({ to, label, startIcon = null }) {
  let activeStyle = {
    textDecoration: "none",
    borderBottom: "2px solid teal",
  };

  let inactiveStyle = {
    textDecoration: "none",
  };
  return (
    <NavLink
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
    >
      <Button
        sx={{ margin: "8px 12px" }}
        color="primary"
        startIcon={startIcon && startIcon}
        variant="text"
      >
        {label}
      </Button>
    </NavLink>
  );
}

export default LinkComponent;
