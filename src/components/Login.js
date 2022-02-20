import { useState, useEffect } from 'react';
import { Container } from './styles/Container.styled';
import { StyledForm } from './styles/StyledForm.styled';
import { Button } from './styles/Button.styled';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  let navigate = useNavigate();

  useEffect(() => {
    if (cookies['user']) {
      return navigate('/');
    }
  }, [cookies]);

  const handleLogin = (e) => {
    e.preventDefault();
    setCookie('user', username, { path: '/' });
    setUsername('');
    setPassword('');
  };

  return (
    <Container>
      <StyledForm onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button>Login</Button>
      </StyledForm>
    </Container>
  );
};

export default Login;
