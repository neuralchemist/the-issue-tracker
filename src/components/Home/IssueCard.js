import { useState } from "react";
// mui 5
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// custom components
import EditButton from "./EditButton";
import ResolvedButton from "./ResolvedButton";
import OwnerChip from "./OwnerChip";
import RemoveButton from "./RemoveButton";
// custom hooks
import { useUserConsumer } from "../../Firebase/firebase-auth";
// custom utils
import { trim_text } from "./utils";
import IssueModal from "./IssueModal";
import { CardActionArea } from "@mui/material";

function IssueCard({ issue }) {
  const [open, setOpen] = useState(false);
  //  get user hook
  const { user } = useUserConsumer();

  // assigned user can resolve content
  const assignedUserContent = <ResolvedButton issue={issue} />;

  const nonAssignedUserContent = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="subtitle2" marginRight={0.5}>
        For:
      </Typography>
      <OwnerChip name={issue.assigned_to} />
    </Box>
  );
  const resolveContent =
    user?.uid === issue.assigned_id ? (
      <>{assignedUserContent}</>
    ) : (
      <>{nonAssignedUserContent}</>
    );

  // author can edit or remove issue
  const authorContent = issue.resolved ? (
    <RemoveButton issue={issue} />
  ) : (
    <EditButton issue={issue} />
  );

  const nonAuthorContent = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="subtitle2" marginRight={0.5}>
        By:
      </Typography>
      <OwnerChip name={issue.author} />
    </Box>
  );

  const editContent =
    user?.uid === issue.author_id ? (
      <>{authorContent}</>
    ) : (
      <>{nonAuthorContent}</>
    );

  // header
  const headerContent = issue.resolved ? (
    <Typography variant="h6" color="success.dark">
      Resolved
    </Typography>
  ) : (
    <Typography variant="h6" color="error.light">
      {issue.priority}
    </Typography>
  );

  return (
    <>
    {/* Modal */}
      <IssueModal
        issue={issue}
        open={open}
        setOpen={setOpen}
        headerContent={headerContent}
        editContent={editContent}
        resolveContent={resolveContent}
      />
      {/* Card */}
      <Card>
        <CardContent>
          <CardActionArea onClick={() => setOpen(true)}>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "background.default",
              }}
            >
              {headerContent}
            </CardActions>

            <CardHeader
              title={trim_text(issue.title, 30)}
              titleTypographyProps={{ align: "center" }}
              sx={{
                height: "100px",
              }}
            />

            <Typography
              sx={{
                height: "150px",
              }}
              textAlign="center"
            >
              {trim_text(issue.description, 100)}
            </Typography>
          </CardActionArea>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-end",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {editContent}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            {resolveContent}
          </Box>
        </CardActions>
      </Card>
    </>
  );
}

export default IssueCard;
