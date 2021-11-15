import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { config } from "../App";
import Footer from "./Footer";
import Header from "./Header";
import "./Register.css";

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((nextFormData) => ({ ...nextFormData, [key]: value }));
  };

  /**
   * Validate the input values so that any bad or illegal values are not passed to the backend.
   *
   * @returns {boolean}
   *    Whether validation has passed or not
   *
   * Return false if any validation condition fails, otherwise return true.
   * -    Check that username field is not an empty value
   * -    Check that username field is not less than 6 characters in length
   * -    Check that username field is not more than 32 characters in length
   * -    Check that password field is not an empty value
   * -    Check that password field is not less than 6 characters in length
   * -    Check that password field is not more than 32 characters in length
   * -    Check that confirmPassword field has the same value as password field
   */
  const validateInput = (data) => {
  };


  // TODO: CRIO_TASK_MODULE_REGISTER - Implement the register function
  /**
   * Definition for register handler
   * This is the function that is called when the user clicks on the register button or submits the register form
   * -    Call the previously defined validateInput() function and check that is returns true, i.e. the input values pass validation
   * -    Call the previously defined performAPICall() function asynchronously and capture the returned value in a variable
   * -    If the returned value exists,
   *      -   Clear the input fields
   *      -   Display a success message
   *      -   Redirect the user to the "/login" page
   */
  
  // TODO: CRIO_TASK_MODULE_REGISTER - Fetch the API response
  /**
   * Perform the API call over the network and return the response
   *
   * @returns {{ success: boolean }|undefined}
   *     The response JSON object
   *
   * -    Set the loading state variable to true
   * -    Perform the API call via a fetch call: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
   * -    The call must be made asynchronously using Promises or async/await
   * -    The call must handle any errors thrown from the fetch call
   * -    Parse the result as JSON
   * -    Set the loading state variable to false once the call has completed
   * -    *** If in Milestone 1 ***,
   * -      return the response JSON object
   * -    *** If in Milestone 2 ***,
   * -      Call the validateResponse(errored, response) function defined previously
   * -        If response passes validation, return the response object
   *
   * Example for successful response from backend for the API call:
   * HTTP 200
   * {
   *      "success": true,
   * }
   *
   * Example for failed response from backend for the API call:
   * HTTP 400
   * {
   *      "success": false,
   *      "message": "Username is already taken"
   * }
   */
  const register = async (formData) => {
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Header hasHiddenAuthButtons />
      <Box className="content">
        <Stack spacing={2} className="form">
          <h2 className="title">Register</h2>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            title="Username"
            name="username"
            placeholder="Enter Username"
            fullWidth
            onChange={handleInput}
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            // FIXME - Is this required? Not showing up on UI
            placeholder="Enter a password with minimum 8 characters"
            onChange={handleInput}
            // FIXME - Update placeholder text
            helperText="Password must be atleast 6 characters length"
            fullWidth
          />
          <TextField
            id="confirmPassword"
            variant="outlined"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password to confirm"
            onChange={handleInput}
            fullWidth
          />
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress size={25} color="primary" />
            </Box>
          ) : (
            <Button
              className="button"
              variant="contained"
              onClick={() => register(formData)}
              sx={{ "background-color": "#00a278" }}
            >
              Register Now
            </Button>
          )}
          <p className="secondary-action">
            Already have an account{" "}
            <a className="link" href="/login">
              Login here
            </a>
          </p>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default Register;