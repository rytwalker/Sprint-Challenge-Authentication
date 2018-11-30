import styled from 'styled-components';

export const StyledForm = styled.form`
  background: #fff;
  width: 35%;
  margin: 5rem auto 0;
  padding: 3rem 5rem;
  border-radius: 2px;
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.2);
  h3 {
    font-size: 3rem;
    margin-top: 1rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    label {
      font-size: 1.4rem;
      text-align: left;
      margin-bottom: 5px;
    }
    input {
      font-size: inherit;
      padding: 1rem 1.5rem;
      border: 2px solid #e8eaea;
      border-radius: 2px;
      &:focus {
        outline: 2px solid #3cd788;
        border-radius: 2px;
      }
    }
  }
  button {
    width: 100%;
    padding: 2rem;
    background: #3cd788;
    color: #fff;
    font-size: inherit;
    font-family: inherit;
    font-weight: 700;
    border: none;
    border-radius: 2px;
    transition: all 0.2s;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
      background: #46ea95;
    }
  }
`;
