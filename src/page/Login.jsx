import styled from 'styled-components';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../Util/globalVeribels.js"
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
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await fetch (`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "username": username,
          "password": password
        })
      });
      if (!result.ok) {
        if (result.status === 401) {
          setError('Forkert brugernavn eller adgangskode');
        } else {
          const errorData = await result.json();
          setError(errorData.message);
        }
        return;
      }
      const data = await result.json();
      console.log(data);

      // Save token and username in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);

      // Redirect to home page
      navigate('/');

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
      {error && <Error>{error}</Error>}
      <Input type="submit" value="Log ind" />
    </Form>
  );
}

export default Login;