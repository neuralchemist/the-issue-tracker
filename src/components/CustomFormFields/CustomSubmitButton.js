// mui5
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function CustomSubmitButton({ label, isDisabled }) {
  return (
    <Grid item xs={12}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={isDisabled}
        sx={{ mt: 2, mb: 2 }}
      >
        {label}
      </Button>
    </Grid>
  );
}

export default CustomSubmitButton;
//
