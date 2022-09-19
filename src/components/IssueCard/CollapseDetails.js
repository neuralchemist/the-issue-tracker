import React from "react";
// mui 5
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";

/**
 * show details about the issue.
 * can be collapsed or expanded
 */
function CollapseDetails({ expanded, issue }) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <Divider variant="fullWidth" />
      <CardContent>
        <Typography paragraph>{issue.description}</Typography>
      </CardContent>
    </Collapse>
  );
}

export default CollapseDetails;
