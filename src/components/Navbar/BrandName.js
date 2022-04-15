// react-router-dom
import { NavLink } from "react-router-dom";
// mui5
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BugReportIcon from "@mui/icons-material/BugReport";
import Box from "@mui/material/Box";

function BrandName({ to, label }) {
  return (
    <Box display="flex" flexGrow={1}>
      <NavLink component="logo" to={to} style={{ textDecoration: "none" }}>
        <Box display="flex" alignItems="center">
          <IconButton>
            <BugReportIcon fontSize="large" color="primary" />
          </IconButton>
          <Typography
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            variant="h6"
            color="text.secondary"
            noWrap
          >
            {label}
          </Typography>
        </Box>
      </NavLink>
    </Box>
  );
}

export default BrandName;
