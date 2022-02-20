import { CookiesProvider } from 'react-cookie';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import { Container } from './components/styles/Container.styled';

function App() {
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
