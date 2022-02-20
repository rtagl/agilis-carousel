import { useState, useEffect } from 'react';
import { Container } from './styles/Container.styled';
import { StyledForm } from './styles/StyledForm.styled';
import { Button } from './styles/Button.styled';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['user']);
  let navigate = useNavigate();

  useEffect(() => {
    // redirect to home page if user cookie exists
    if (cookies['user']) {
      return navigate('/');
    }
  }, [cookies]);

  const handleLogin = (e) => {
    e.preventDefault();

    // set cookie to username
    setCookie('user', username, { path: '/' });
    setUsername('');
    setPassword('');
  };

  return (
    <Container>
      <StyledForm onSubmit={handleLogin}>
        <div>Login</div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <Button>Login</Button>
      </StyledForm>
    </Container>
  );
};

export default Login;
