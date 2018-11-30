import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <NavLink exact to="/">
          Jokes
        </NavLink>
        <NavLink exact to="/signup">
          Sign Up
        </NavLink>
        <NavLink exact to="/signin">
          Sign In
        </NavLink>
        <button>Log out</button>
      </nav>
    );
  }
}

export default Navbar;
