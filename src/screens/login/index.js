import React, { useState, useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../contexts/user';
import './LoginPage.css';
import { toast } from 'react-toastify';
import { redirect, useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [_, setCookie] = useCookies(['user']);
  const { userState, userDispatch } = useContext(UserContext);
  const notify = () => toast("Wow so easy !");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  useEffect(() => {
    if (Object.values(userState.user).length > 0) {
      redirect('/')
    }

  }, [userState.user])

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform login here, for example by sending the form data to a server
    // alert('Logging in...');
    // console.log('username12321', formData)
    // http://localhost:88/rest/admin/login
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/rest/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": true
      },
      body: JSON.stringify(formData)
    })
    let json = await response.json()
    if (json.error) {
      toast.error(json.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else {
      toast.success(json.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setCookie('accessToken', json.data.token)
      userDispatch({
        type: 'UPDATE_USER_RESPONSE',
        payload: { accessToken: json.data.token, name: "Jacob Holmes", role: "Manager" },
      });
      navigate('/')
    }
    // console.log('response.json()', json); // parses JSON response into native JavaScript objects

    
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="username" name="username" value={formData.username} onChange={handleChange} />
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