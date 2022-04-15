import { FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import React from "react";
// mui5
// react-hook-form
import { Controller } from "react-hook-form";

function SimpleSelect({ field, options, label, name, errors }) {
  const muiConfig = {
    variant: "standard",
    margin: "normal",
    fullWidth: true,
  };

  return (
    <FormControl {...muiConfig} error={!!errors[name]}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select labelId="select-label" {...field}>
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errors[name]?.message ?? ""}</FormHelperText>
    </FormControl>
  );
}

function SelectComponent({ control, options, label, name, errors }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <SimpleSelect
          field={field}
          options={options}
          label={label}
          name={name}
          errors={errors}
        />
      )}
    />
  );
}

export default SelectComponent;
