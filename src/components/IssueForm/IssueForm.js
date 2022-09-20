// mui5
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// react-hook-form
import { useForm, FormProvider } from "react-hook-form";
// custom components
import CustomTextField from "../CustomFormFields/CustomTextField";
import CustomSelectField from "../CustomFormFields/CustomSelectField";
import CustomSubmitButton from "../CustomFormFields/CustomSubmitButton";
import CustomError from "../CustomFormFields/CustomError";

// constants
export const priority_options = [
  {
    value: "high",
    label: "High",
  },

  {
    value: "medium",
    label: "Medium",
  },

  {
    value: "low",
    label: "Low",
  },
];

function IssueForm({
  defaultValues,
  resolver,
  onSubmit,
  isDisabled,
  isError,
  errorMessage,
  all_users_options,
  submitButtonName,
}) {
  // react-form-hook logic
  const methods = useForm({ defaultValues, resolver });

  return (
    <Box sx={{ mt: 1 }}>
      <FormProvider {...methods}>
        <Box
          component="form"
          autoComplete="off"
          noValidate
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Grid container spacing={1}>
            <CustomTextField type="text" label="Title" name="title" required />
            <CustomTextField
              type="text"
              label="Description"
              name="description"
              required
            />
            <CustomSelectField
              options={priority_options}
              label="Priority"
              name="priority"
              required
            />
            <CustomSelectField
              options={all_users_options}
              label="Assign To"
              name="assigned_id"
              required
            />
            <CustomSubmitButton
              label={submitButtonName}
              isDisabled={isDisabled}
            />
            {isError && <CustomError message={errorMessage} />}
          </Grid>
        </Box>
      </FormProvider>
    </Box>
  );
}

export default IssueForm;
