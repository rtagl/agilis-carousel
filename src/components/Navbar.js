import { Button } from './styles/Button.styled';
import { StyledNavbar } from './styles/StyledNavbar.styled';
import { useCookies } from 'react-cookie';

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const handleCookie = () => {
    if (!cookies['user']) {
      setCookie('user', 'finney', { path: '/' });
    } else {
      removeCookie('user', { path: '/' });
    }
  };

  return (
    <StyledNavbar>
      <Button onClick={handleCookie}>
        {cookies['user'] ? 'Logout' : 'Login'}
      </Button>
    </StyledNavbar>
  );
};

export default Navbar;
