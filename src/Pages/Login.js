import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import { Link, Navigate } from "react-router-dom";

// MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

export default function Login(props) {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [open, setOpen] = React.useState(true);

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
    // if (Auth.loggedIn()) {
    //   <>
    //     <Navigate to="/Profile"></Navigate>
    //   </>;
    // } else {
    //   <>
    //     <Navigate to="/Login"></Navigate>
    //   </>;
    // }

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
      <h5 variant="h3" className="loginDescrip">
        {" "}
        {Auth.loggedIn() ? (
          <p>Logged in, start Matching!</p>
        ) : (
          <p>
            Please login using your credentials <br></br>Or{" "}
            <Link to="/Signup">sign up!</Link>
          </p>
        )}
      </h5>
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

            <>
              <Box sx={{ width: "100%" }} >
                <Collapse in={open} >
                  {pointer && (
                    <Alert
                    
                      severity="error"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                      sx={{ mb: 2 }}
                    >
                      {pointer}
                    </Alert>
                  )}
                </Collapse>
                <div className="loginButton">
                <Button
                  disabled={open}
                  variant="contained"
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="submit"
                  style={{ cursor: "pointer", color: "#fff6f7" }}
                  type="submit"
                >
                  Submit
                </Button>
                </div>
              </Box>
            </>
          </div>
        </Box>
      </div>
    </>
  );
}
