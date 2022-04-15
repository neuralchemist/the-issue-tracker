import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import React from "react";

function OwnerChip({ name }) {
  return (
    <Chip
      sx={{ overflow: "hidden", width: "100px" }}
      color="primary"
      size="medium"
      variant="outlined"
      icon={<FaceIcon />}
      label={name}
    />
  );
}

export default OwnerChip;
