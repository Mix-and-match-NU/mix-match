import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';


import Auth from '../utils/auth';

export default function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(event.target.value, "LOGGING")
    console.log('LOGIN HANDLE CHANGE', value)
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
    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  };

return (
  // <div>
  //   hello
  // </div>
    <div>
        <form onSubmit={handleFormSubmit}>
          <input
            className="inputUsername"
            placeholder="Your username"
            name="username"
            type="text"
            value={formState.username}
            onChange={handleChange}
          />
            <input
            className="inputPassword"
            placeholder="******"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button
            className="submit"
            style={{ cursor: 'pointer' }}
            type="submit"
          >
            Submit
          </button>
        </form>
        {Auth.loggedIn() ? <p>logged in</p> : <p>not logged in</p>}
    </div>
// 
)
}
