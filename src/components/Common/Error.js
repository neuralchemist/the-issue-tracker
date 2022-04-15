import React from "react";
import Typography from "@mui/material/Typography";

function Error({ message }) {
  return (
    <Typography marginY={1} variant="subtitle2" color="error" textAlign="center">
      {message && message}
    </Typography>
  );
}

export default Error;
