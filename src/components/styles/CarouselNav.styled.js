import styled from 'styled-components';

export const CarouselNav = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin-top: 1em;

  .carousel-controls {
    width: 50%;
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
    background-color: #3b12c4;
    border-radius: 50%;
    margin: 0.5em;
  }

  .selected {
    background-color: #f213eb;
  }
`;
