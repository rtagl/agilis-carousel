import { Button } from './styles/Button.styled';
import { StyledNavbar } from './styles/StyledNavbar.styled';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const handleLogout = () => {
    removeCookie('user', { path: '/' });
  };

  return (
    <StyledNavbar>
      {!cookies['user'] ? (
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      ) : (
        <Button onClick={handleLogout}>
          {cookies['user'] ? 'Logout' : 'Login'}
        </Button>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
