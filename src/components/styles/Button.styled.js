import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
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
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};

    svg {
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`;
