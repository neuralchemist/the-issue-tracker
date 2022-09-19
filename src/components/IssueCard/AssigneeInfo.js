import React from "react";
// mui 5
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
// styled components
import { StyledUserInfo } from "./styledComponents";

/** show assignee information */
function AssigneeInfo({ assignee }) {
  return (
    <StyledUserInfo>
      <Typography>Assigned to:</Typography>
      <Chip
        label={assignee}
        color="secondary"
        variant="outlined"
        icon={<FaceIcon />}
        sx={{ minWidth: "100px"}}
      />
    </StyledUserInfo>
  );
}

export default AssigneeInfo;
