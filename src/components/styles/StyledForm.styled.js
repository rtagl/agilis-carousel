import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: #cfcfcf;
  padding: 2rem;
  margin: 2rem auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 8px 5px 5px #808080;

  div {
    font-size: 2rem;
    color: #064663;
    font-weight: 500;
  }

  input {
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: 5px;
    border-style: none;
    margin: 0.8rem;
    width: 100%;
  }

  button {
    margin-top: 1rem;
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
  }
`;
