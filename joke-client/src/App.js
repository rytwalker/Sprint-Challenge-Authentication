import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import './styles/App.css';
import Jokes from './components/Jokes';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Component {
  state = {
    jokes: [],
    loggedIn: false
  };

  authenticate = () => {
    const token = localStorage.getItem('auth_token');
    const options = {
      headers: {
        Authorization: token
      }
    };
    if (token) {
      axios
        .get(`http://localhost:3300/api/jokes`, options)
        .then(res => {
          this.setState({ loggedIn: true, jokes: res.data });
        })
        .catch(err => console.dir(err));
    } else {
      this.props.history.push('/sign-in');
    }
  };

  logout = () => {
    if (this.state.loggedIn) {
      localStorage.removeItem('auth_token');
      this.setState({ loggedIn: false });
      this.props.history.push('/sign-in');
    }
  };

  componentDidMount() {
    this.authenticate();
  }

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    if (pathname === '/' && pathname !== prevProps.location.pathname) {
      this.authenticate();
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar logout={this.logout} loggedIn={this.state.loggedIn} />
        <h1>Dad's Gonna Joke</h1>
        <Route
          exact
          path="/"
          render={routerProps => (
            <Jokes {...routerProps} jokes={this.state.jokes} />
          )}
        />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </div>
    );
  }
}

export default withRouter(App);
