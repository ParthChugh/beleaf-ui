import React, { useState, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../contexts/user';
import './LoginPage.css';

const LoginPage = () => {
  const [_, setCookie] = useCookies(['user']);
  const { userDispatch } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login here, for example by sending the form data to a server
    alert('Logging in...');
    setCookie('accessToken', "access_token")
    userDispatch({
      type: 'UPDATE_USER_RESPONSE',
      payload: { accessToken: "access_token", name: "Jacob Holmes", role: "Manager" },
    });
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;