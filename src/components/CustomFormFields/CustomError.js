// mui5
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function CustomError({ message }) {
  return (
    <Grid item xs={12}>
      <Typography
        marginY={1}
        variant="subtitle2"
        color="error"
        textAlign="center"
      >
        {message && message}
      </Typography>
    </Grid>
  );
}

export default CustomError;
