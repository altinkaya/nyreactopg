import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from "../Service/apiFacede.js"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 1.2em;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Error = styled.p`
  color: red;
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(username, password);
      if (!data) {
        setError('No data returned from login');
        return;
      }
      if (!data.ok) {
        if (data.status === 401) {
          setError('Forkert brugernavn eller adgangskode');
        } else {
          setError(data.message);
        }
        return;
      }
      console.log(data);

      // Save token and username in localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      if (data.username) {
        localStorage.setItem('username', data.username);
      }

      // Set isAuthenticated to true
      setIsAuthenticated(true);

      // Redirect to home page
      navigate('/home');
    } catch (e) {
      setError(e.toString());
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Brugernavn:
        <Input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </Label>
      <Label>
        Adgangskode:
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </Label>
      <Input type="submit" value="Log ind" />
      {error && <p>{error}</p>}
    </Form>
  );
}

export default Login;