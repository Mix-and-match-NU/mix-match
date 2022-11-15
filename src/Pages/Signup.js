
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = (props) => {
  const [formState, setFormState] = useState({ email: '', username: '', password: '' });
  const [signup, { error, data }] = useMutation(SIGNUP_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await signup({
        variables: { ...formState },
      });

      Auth.signup(data.signup.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      username: '',
      password: '',
    });

return(
    <div>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Your username"
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Your email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="******"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button
            className="btn btn-block btn-info"
            style={{ cursor: 'pointer' }}
            type="submit"
          >
            Submit
          </button>
        </form>
    </div>
)
}}

export default Signup