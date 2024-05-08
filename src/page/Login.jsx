import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../Util/globalVeribels.js"

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
    <form onSubmit={handleSubmit}>
      <label>
        Brugernavn:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Adgangskode:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      {error && <p>{error}</p>}
      <input type="submit" value="Log ind" />
    </form>
  );
}

export default Login;