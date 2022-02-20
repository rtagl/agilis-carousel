import styled from 'styled-components';

export const Button = styled.button`
  background-color: #064663;
  padding: 0.75em;
  width: 100px;
  border-radius: 5px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
  font-weight: 700;

  &:hover {
    background-color: #3cbec3;
    color: #064663;

    svg {
      stroke: #064663;
    }
  }
`;
