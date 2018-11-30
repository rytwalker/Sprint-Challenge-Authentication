import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const StyledNavbar = styled.nav`
  .container {
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    height: 40px;
    .jokes {
      margin-right: auto;
    }
    a {
      color: #23555c;
      margin-left: 1rem;
      &:hover {
        color: #3cd788;
      }
    }
    .active {
      color: #3cd788;
    }
    button {
      font-size: inherit;
      border: 1px solid #3cd788;
      margin-left: 1rem;
      cursor: pointer;
      &:hover {
        background: #3cd788;
        color: #fff;
      }
    }
  }
`;

class Navbar extends Component {
  handleClick = e => {
    this.props.logout();
  };

  render() {
    const { loggedIn } = this.props;
    return (
      <StyledNavbar>
        <div className="container">
          <NavLink className="jokes" exact to="/">
            Jokes
          </NavLink>
          {!loggedIn ? (
            <NavLink exact to="/sign-up">
              Sign Up
            </NavLink>
          ) : null}
          {!loggedIn ? (
            <NavLink exact to="/sign-in">
              Sign In
            </NavLink>
          ) : null}
          {loggedIn ? (
            <button onClick={this.handleClick}>Log out</button>
          ) : null}
        </div>
      </StyledNavbar>
    );
  }
}

export default Navbar;
