import React, { Component } from 'react';
import { StyledForm } from '../styles/StyledForm';

const initalUser = {
  username: '',
  password: ''
};

class SignUp extends Component {
  state = { user: initalUser, message: '' };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  render() {
    const { username, password } = this.state.user;
    return (
      <div>
        <StyledForm>
          <div className="form-group">
            <h3>Sign Up</h3>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              name="username"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Sign up!</button>
          {this.state.message ? <p>{this.state.message}</p> : null}
        </StyledForm>
      </div>
    );
  }
}

export default SignUp;
