
import { login } from "../Service/apiFacede.js";

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, NavLink } from 'react-router-dom'; // Import useNavigate and NavLink


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

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const data = await login(username, password);
      if (!data) {
        setError('No data returned from login');
        return;
      }

      console.log('Token saved in localStorage:', data.token);
      setIsAuthenticated(true);
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (error) {
      setError('Failed to login');
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Username</Label>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <Label>Password</Label>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <Error>{error}</Error>}

      <Input type="submit" value="Login" />

      {/* Link to Register page */}
      <NavLink to="/register">Register</NavLink>
    </Form>
  );
};

export default Login;
