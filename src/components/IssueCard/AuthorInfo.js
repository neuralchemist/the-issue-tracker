import React from "react";
// mui 5
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
// styled components
import { StyledUserInfo } from "./styledComponents";

/** show author information */
function AuthorInfo({ author }) {
  return (
    <StyledUserInfo>
      <Typography sx={{ mr: { xs: 1, sm: 0 } }}>Created By:</Typography>
      <Chip
        label={author}
        color="secondary"
        variant="outlined"
        icon={<FaceIcon />}
        sx={{ minWidth: "100px" }}
      />
    </StyledUserInfo>
  );
}

export default AuthorInfo;
