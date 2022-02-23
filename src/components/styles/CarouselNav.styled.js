import styled from 'styled-components';

export const CarouselNav = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;

  .carousel-controls {
    width: 400px;
    min-width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .image-indicators {
    display: flex;
    align-items: center;
  }

  .image-indicator {
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    margin: 0.4em;
  }

  .selected {
    background-color: #e31c9d;
  }
`;
