import styled from 'styled-components';

export const StyledCarousel = styled.div`
  background-color: #cfcfcf;
  width: 1150px;
  max-width: 100%;
  margin: 1.5rem auto;
  border-radius: 5px;
  box-shadow: 8px 5px 5px #064663;

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
    box-shadow: 4px 2px 2px #064663;
    border-radius: 5px;
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
