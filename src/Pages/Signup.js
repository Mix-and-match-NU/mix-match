import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../utils/mutations";

import Auth from "../utils/auth";

// MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    age: "",

    playlist: Array(9).fill({
      title: "No Song Selected",
      artist: "N/A",
      album: "N/A",
      year: "N/A",
    }),
  });
  const [addUser, { error, data }] = useMutation(SIGNUP_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    formState.age = Number(formState.age);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(JSON.stringify(e, null, 2));
    }
  };

  // Pointer leave
  const [pointer, pointerSetError] = useState("");
  const [open, setOpen] = React.useState(true);

  function pointerLeave(event) {
    if (!event.target.value) {
      pointerSetError("*All fields are required.");
    } else {
      pointer("");
    }
  }

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          {/* <h4 className="card-header bg-dark text-light p-2">Sign Up</h4> */}
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
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
                    <h2>Sign Up</h2>

                    <div>
                      <TextField
                        className="form-input"
                        placeholder="First Name"
                        name="first_name"
                        type="text"
                        value={formState.first_name}
                        onChange={handleChange}
                        onPointerLeave={pointerLeave}
                        helperText="*Required field"
                        variant="standard"
                        label="First Name"
                      />
                    </div>
                    <div>
                      <TextField
                        className="form-input"
                        placeholder="Last Name"
                        name="last_name"
                        type="text"
                        value={formState.last_name}
                        onChange={handleChange}
                        onPointerLeave={pointerLeave}
                        helperText="*Required field"
                        variant="standard"
                        label="Last Name"
                      />
                    </div>
                    <div>
                      <TextField
                        className="form-input"
                        placeholder="Username"
                        name="username"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                        onPointerLeave={pointerLeave}
                        helperText="*Required field"
                        variant="standard"
                        label="Username"
                      />
                    </div>
                    <div>
                      <TextField
                        className="form-input"
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        onPointerLeave={pointerLeave}
                        helperText="*Required field"
                        variant="standard"
                        label="Email"
                      />
                    </div>
                    <div>
                      <TextField
                        className="form-input"
                        placeholder="******"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                        onPointerLeave={pointerLeave}
                        helperText="*Required field"
                        variant="standard"
                        label="Password"
                      />
                    </div>
                    <div>
                      <TextField
                        className="form-input"
                        placeholder="Age"
                        name="age"
                        type="number"
                        value={formState.age}
                        onChange={handleChange}
                        onPointerLeave={pointerLeave}
                        helperText="*Required field"
                        label="Age"
                        variant="standard"
                      />
                    </div>

                    <>
                      <Box sx={{ width: "100%" }}>
                        <Collapse in={open}>
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
                      </Box>
                    </>

                    <div >
                      <div className="loginButton">
                      <Button
                        className="btn btn-block btn-primary "
                        style={{ cursor: "pointer", color: "#fff6f7" }}
                        type="submit"
                        variant="contained"
                      >
                        Submit
                      </Button>
                      </div>
                      <br></br>
                      <div>
                      <h7>
                        Have an account? <Link to="/Login">Log In</Link>
                      </h7>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            )}

            {error && <div className="my-3 p-3 bg-danger">{error.message}</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
