import React, { Component } from 'react';
import axios from 'axios';
import { StyledForm } from '../styles/StyledForm';

const initalUser = {
  username: '',
  password: ''
};

// const url = process.env.REACT_APP_API_URL;

class SignUp extends Component {
  state = { user: initalUser, message: '' };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:3300/api/register`, this.state.user)
      .then(res => {
        this.setState({ message: 'Sign Up Success.', user: { ...initalUser } });
        this.props.history.push('/sign-in');
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message,
          user: { ...initalUser }
        });
      });
  };

  render() {
    const { username, password } = this.state.user;
    return (
      <div>
        <StyledForm onSubmit={this.handleFormSubmit}>
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
