// mui 5
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// react-hook-form
import { useFormContext } from "react-hook-form";

function CustomTextField({ type = "text", label, name, required }) {
  // react-hook-form
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // mui config
  const muiConfig = {
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
  };
  return (
    <Grid item xs={12}>
      <TextField
        type={type}
        label={label}
        multiline
        maxrows={8}
        required={required}
        error={!!errors[name]}
        helperText={errors[name]?.message ?? ""}
        {...register(name)}
        {...muiConfig}
      />
    </Grid>
  );
}

export default CustomTextField;
