import React from 'react';

function Login () {
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
}

export default Login