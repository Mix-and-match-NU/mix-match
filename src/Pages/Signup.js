import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../utils/mutations";

import Auth from "../utils/auth";

// MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <div>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleFormSubmit}
                >
                  {/* <form onSubmit={handleFormSubmit}> */}
                  <div>
                    <div>
                      <TextField
                        className="form-input"
                        placeholder="First Name"
                        name="first_name"
                        type="text"
                        value={formState.first_name}
                        onChange={handleChange}
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
                        label="Age"
                        variant="standard"
                      />
                    </div>
                  </div>
                  <div>
                    <Button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer" }}
                      type="submit"
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </div>
                </Box>
              </div>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
