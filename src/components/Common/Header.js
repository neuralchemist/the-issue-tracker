import React from "react";
// mui5
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AddAlertIcon from "@mui/icons-material/AddAlert";

function Header({ heading }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 1,
      }}
    >
      <Avatar>
        <AddAlertIcon color="primary"/>
      </Avatar>
      <Typography component="h1" variant="h5">
        {heading}
      </Typography>
    </Box>
  );
}

export default Header;
