import React, { Component } from 'react';

class Jokes extends Component {
  render() {
    return (
      <div>
        {!this.props.jokes ? (
          <div>Loading Jokes...</div>
        ) : (
          this.props.jokes.map(joke => (
            <div key={joke.punchline}>
              <div>{joke.setup}</div>
              <div>{joke.punchline}</div>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Jokes;
