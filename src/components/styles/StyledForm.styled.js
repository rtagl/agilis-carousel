import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
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
  }
`;
