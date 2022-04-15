// mui 5
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs: 375, sm: 400},

  minHeight: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function IssueModal({
  issue,
  open,
  setOpen,
  headerContent,
  editContent,
  resolveContent,
}) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <CardContent>
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
            title={issue.title}
            titleTypographyProps={{ align: "center" }}
            sx={{ mb: 3 }}
          />

          <Typography variant="body1" minHeight={100} textAlign="center">
            {issue.description}
          </Typography>
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
    </Modal>
  );
}
export default IssueModal;
