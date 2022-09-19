import React from "react";
// mui 5
import Chip from "@mui/material/Chip";

/**
 *  priority = "high" | "medium" | "low"
 */
function PriorityContent({ issue }) {
  return (
    <>
      {issue.resolved ? (
        <Chip
          label="resolved"
          color="success"
          variant="filled"
          sx={{ width: "80px" }}
        />
      ) : (
        <Chip
          label={issue.priority}
          color="error"
          variant="filled"
          sx={{ width: "80px" }}
        />
      )}
    </>
  );
}

export default PriorityContent;
