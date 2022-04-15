import React from "react";
// mui5
import TextField from "@mui/material/TextField";

function TextComponent({ type, label, name, register, errors }) {
  const muiConfig = {
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
  };
  return (
    <TextField
      // autoComplete="off"
      color="primary"
      type={type}
      label={label}
      error={!!errors[name]}
      helperText={errors[name]?.message ?? ""}
      {...register(name)}
      {...muiConfig}
      // inputProps={{
      //   style: {
      //     WebkitBoxShadow: "0 0 0 1000px #161b22 inset",
      //     WebkitTextFillColor: "white"

      //   },
      // }}
    />
  );
}

export default TextComponent;
