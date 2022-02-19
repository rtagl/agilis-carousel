import styled from 'styled-components';

export const StyledCarousel = styled.div`
  background-color: #6f88ab;
  padding: 1.5em;
  width: 1150px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;

  .images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    display: flex;
    justify-content: center;
    padding: 0.5em;
    margin: 0.5rem;
    object-fill: cover;
    transition: transform 0.3s;
  }
  .card-1,
  .card-3 {
    display: flex;
    align-content: center;
    max-width: 25%;
    opacity: 0.6;
    height: auto;
  }
  .card-2 {
    max-width: 30%;
    height: auto;
  }
  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .card:hover {
    transform: scale(1.05);
  }
`;
