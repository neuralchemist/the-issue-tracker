// mui5
import Button from "@mui/material/Button";

function SubmitButtonComponent({ label, isDisabled }) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      disabled={isDisabled}
      sx={{ mt: 3, mb: 2 }}
    >
      {label}
    </Button>
  );
}

export default SubmitButtonComponent;
