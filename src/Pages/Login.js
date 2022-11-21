import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import { Link, Navigate } from "react-router-dom";

// MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login(props) {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(event.target.value, "LOGGING");
    console.log("LOGIN HANDLE CHANGE", value);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    if (Auth.loggedIn()) {
      <>
        <Navigate to="/Profile"></Navigate>
      </>;
    } else {
      <>
        <Navigate to="/Login"></Navigate>
      </>;
    }

    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };

  // Pointer leave
  const [pointer, pointerSetError] = useState("");

  function pointerLeave(event) {
    if (!event.target.value) {
      pointerSetError("*All fields are required.");
    } else {
      pointer("");
    }
  }

  return (
    <>
      <h3 className="loginDescrip"> {Auth.loggedIn() ? <p>Logged in, start Matching!</p> : <p>Please login using your credentials <br></br>Or <Link to="/Signup">sign up!</Link></p>}</h3>
      <div className="formBox">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <div className="innerFormBox">
            <h2>Login</h2>
            <div>
              <TextField
                className="inputUsername"
                placeholder="username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
                onPointerLeave={pointerLeave}
                label="Username*"
                variant="standard"
                helperText="*Required field"
              />
              <TextField
                className="inputPassword"
                placeholder="******"
                name="password"
                value={formState.password}
                onChange={handleChange}
                onPointerLeave={pointerLeave}
                label="Password*"
                type="password"
                variant="standard"
                helperText="*Required field"
              />
            </div>
            <div className="alertDiv">
              <alert>
                {pointer && <alert style={{ color: "red" }}>{pointer}</alert>}
              </alert>
            </div>
            <div>
              <Button
                className="submit"
                style={{ cursor: "pointer" }}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}
