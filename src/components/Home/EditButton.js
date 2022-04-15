import React from "react";
// react-router-dom
import { useNavigate } from "react-router-dom";
// mui 5
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
// custom routes
import { EDITISSUE } from "../Common/routes";

function EditButton({ issue }) {
  // react-router-dom logic
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate to 'edit-issue' page
    navigate(EDITISSUE, {
      state: { issue: issue, author_id: issue.author_id },
    });
  };
  return (
    <Button
      size="small"
      color="primary"
      variant="contained"
      startIcon={<EditIcon />}
      onClick={handleClick}
    >
      Edit
    </Button>
  );
}

export default EditButton;
