import styled from 'styled-components';

export const StyledCarousel = styled.div`
  background-color: aqua;
  padding: 1.5em;

  .images {
    display: flex;
    justify-content: center;
  }
  .card {
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    margin: 0.5rem;
    width: 300px;
    height: 300px;
  }
  .card-1,
  .card-3 {
    display: flex;
    align-items: center;
    width: 270px;
    opacity: 0.6;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }

  .card:hover {
    transform: scale(1.05);
  }
`;
