import { useState } from "react";
// mui5
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// yup
import { object, string, ref } from "yup";
// react-hook-form
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// react-router-dom
import { useNavigate } from "react-router-dom";
// custom components
import CustomTextField from "../CustomFormFields/CustomTextField";
import CustomSubmitButton from "../CustomFormFields/CustomSubmitButton";
import CustomError from "../CustomFormFields/CustomError";
// custom hook
import { useUserConsumer } from "../../Firebase/firebase-auth";
// custom routes
import { HOME } from "../Common/routes";

export const defaultValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const schema = object({
  username: string()
    .max(10, "can't be more than 10 character")
    .required("Required"),
  email: string().required("Required").email("invalid email format"),
  password: string().required("Required"),
  confirmPassword: string()
    .required("Required")
    .oneOf([ref("password"), ""], "passwords must match"),
});

function Form() {
  // react-router-dom logic
  const navigate = useNavigate();
  // react-form-hook logic
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });

  // loading and error state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // firebase logic
  let { doCreateUserWithEmailPasswordUsername } = useUserConsumer();

  const onSubmit = async (values) => {
    // extract email, password and username
    const { email, password, username } = values;

    try {
      setLoading(true);
      setError("");
      await doCreateUserWithEmailPasswordUsername(email, password, username);

      // programatically navigate to the Home page
      navigate(HOME);
    } catch (err) {
      setError("Failed to sign up");
    }

    setLoading(false);
  };

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
            <CustomTextField
              type="text"
              label="Username"
              name="username"
              required
            />

            <CustomTextField type="email" label="Email" name="email" required />

            <CustomTextField
              type="password"
              label="Password"
              name="password"
              required
            />

            <CustomTextField
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              required
            />

            <CustomSubmitButton label="Sign Up" isDisabled={loading} />

            <CustomError message={error} />
          </Grid>
        </Box>
      </FormProvider>
    </Box>
  );
}

export default Form;
