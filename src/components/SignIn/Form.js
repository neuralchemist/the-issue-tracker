import { useState } from "react";
// mui5
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// yup
import { object, string } from "yup";
// react-hook-form
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// react-router-dom
import { useNavigate, useLocation } from "react-router-dom";
// custom components
import CustomTextField from "../CustomFormFields/CustomTextField";
import CustomSubmitButton from "../CustomFormFields/CustomSubmitButton";
import CustomError from "../CustomFormFields/CustomError";
// custom hook
import { useUserConsumer } from "../../Firebase/firebase-auth";
// custom routes
import { HOME } from "../Common/routes";

export const defaultValues = {
  email: "",
  password: "",
};

export const schema = object({
  email: string().required("Required").email("invalid email format"),
  password: string().required("Required"),
});

function Form() {
  // react-router-dom logic
  const navigate = useNavigate();
  const location = useLocation();
  // react-form-hook logic
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });

  // loading and error state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // firebase logic
  const { doSignInWithEmailAndPassword } = useUserConsumer();

  const onSubmit = async (values) => {
    // extract email and password
    const { email, password } = values;
    // extract redirect location
    const origin = location.state?.from?.pathname || HOME;

    try {
      setLoading(true);
      setError("");
      await doSignInWithEmailAndPassword(email, password);
      // programatically navigate to the page originally intended to access
      navigate(origin);
    } catch (err) {
      console.log("%c onSubmit -> Failed to sign in ", "color: red");
      setError("Failed to sign in");
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
            <CustomTextField type="email" label="Email" name="email" required />

            <CustomTextField
              type="password"
              label="Password"
              name="password"
              required
            />

            <CustomSubmitButton label="Sign In" isDisabled={loading} />

            <CustomError message={error} />
          </Grid>
        </Box>
      </FormProvider>
    </Box>
  );
}

export default Form;
