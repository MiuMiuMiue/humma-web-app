import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/userAuthenticationService';
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await loginUser(formData);
      localStorage.setItem('access-token', response.access);
      window.location.href = '/';
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <h1 className="logo-text">Humma.AI</h1>
      </div>
      
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email:" 
          className="input-field" 
        />
        <input 
          type="password" 
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password:" 
          className="input-field" 
        />
        
        <button type="submit" className="login-button">Login</button>
      </form>
      
      <p className="signup-text">
        Don't have an account? <a onClick={() => navigate('/register')} className="signup-link">Sign up</a>
      </p>
    </div>
  );
};

export default Login;