import React, { Component } from 'react';
import styled from 'styled-components';

const StyledJokes = styled.div`
  text-align: left;
  width: 60%;
  margin: 0 auto;
  p {
    font-size: 1.2rem;
  }
  .joke {
    border: 1px solid #23555c;
    border-radius: 2px;
    margin-bottom: 1rem;
  }

  .setup {
    padding: 1rem;
  }

  .punchline {
    background: #23555c;
    padding: 1rem;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      background: none;
      color: #3cd788;
    }
  }
`;

class Jokes extends Component {
  render() {
    return (
      <StyledJokes>
        <p>Hover to reveal the hilarious punchline.</p>
        {!this.props.jokes ? (
          <div>Loading Jokes...</div>
        ) : (
          this.props.jokes.map(joke => (
            <div className="joke" key={joke.punchline}>
              <div className="setup">{joke.setup}</div>
              <div className="punchline">{joke.punchline}</div>
            </div>
          ))
        )}
      </StyledJokes>
    );
  }
}

export default Jokes;
