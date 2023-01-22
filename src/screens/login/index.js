import React, { useState, useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../contexts/user';
import './LoginPage.css';
import { redirect, useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [_, setCookie] = useCookies(['user']);
  const { userState,userDispatch } = useContext(UserContext);
  const navigate = useNavigate();
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

  useEffect(() => {
    if(Object.values(userState.user).length > 0){
      redirect('/')
    }
    
  },[userState.user])

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login here, for example by sending the form data to a server
    alert('Logging in...');
    setCookie('accessToken', "access_token")
    userDispatch({
      type: 'UPDATE_USER_RESPONSE',
      payload: { accessToken: "access_token", name: "Jacob Holmes", role: "Manager" },
    });
    navigate('/')
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