import React from "react";
// mui5
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar   sx={{ m: 1, backgroundColor: 'background.paper'  }}>
        <LockOutlinedIcon  color="primary"/>
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
    </Box>
  );
}

export default Header;
