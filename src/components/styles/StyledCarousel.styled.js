import styled from 'styled-components';

export const StyledCarousel = styled.div`
  background-color: #041c32;
  width: 1150px;
  max-width: 100%;
  margin: 0 auto;

  .images {
    display: flex;
    padding: 1em;
    justify-content: center;
    align-items: center;
  }
  .card {
    padding: 1em;
    transition: transform 0.3s;
  }
  .card-1,
  .card-3 {
    display: none;
  }
  .card-2 {
    width: 370px;
    max-width: 80%;
    height: 350px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card:hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: 750px) {
    .card-1,
    .card-3 {
      display: flex;
      align-content: center;
      width: 300px;
      max-width: 30%;
      height: 250px;
      opacity: 0.55;
    }
    .card-2 {
      width: 320px;
      max-width: 35%;
      height: 290px;
    }
  }
`;
