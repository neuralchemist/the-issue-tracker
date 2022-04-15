import React from "react";
// react-router-dom
import { Link as RouterLink } from "react-router-dom";
// mui5
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Footer({ message, to }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <Grid container justifyContent="center">
        <Grid item>
          <Link
            component={RouterLink}
            to={to}
            color="text.primary"
            variant="body2"
            sx={{ textDecoration: "none" }}
          >
            {message}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
