import React from "react";
// mui 5
import Chip from "@mui/material/Chip";

/**
 *  priority = "high" | "medium" | "low"
 */

let priorityColorMap = {
  high: "error",
  medium: "warning",
  low: "info",
};

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
          color={priorityColorMap[issue.priority]}
          variant="filled"
          sx={{ width: "80px" }}
        />
      )}
    </>
  );
}

export default PriorityContent;
