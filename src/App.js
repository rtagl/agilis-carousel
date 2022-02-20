import { useState, useEffect } from 'react';
import { CookiesProvider } from 'react-cookie';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import { Container } from './components/styles/Container.styled';

function App() {
  useEffect(() => {});
  return (
    <CookiesProvider>
      <Container>
        <Navbar />
        <Carousel />
      </Container>
    </CookiesProvider>
  );
}

export default App;
