import React, { useState } from 'react';
import { registerUser } from '../services/userAuthenticationService';
import '../styles/register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    birthdate: ''
  });
  const [submitted, setSubmitted] = useState(false);
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
    setSubmitted(true);
    setError('');
    console.log('Form data:', formData);
    try {
      await registerUser(formData);
      navigate('/login');
    } catch (error) {
      console.log(error)
      setError('Registration failed. Please try again.');
      setSubmitted(false);
    }
  };

  return (
    <div className="register-container">
      <main>
        <div className="intro-text">
          <h2>Building our collective story, together</h2>
          <p>
            Before we begin, users of Humma must be over 16 years old to use our
            platform. Please complete the registration form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          {error && <div className="error-message">{error}</div>}
          <label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="User Name:"
              required
            />
          </label>

          <label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email:"
              required
            />
          </label>

          <label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password:"
              required
            />
          </label>

          <label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer-not-to-say">Prefer not to say</option>
            </select>
          </label>

          <label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn-submit">
            Sign Up
          </button>
          <button type="button" className="btn-submit" onClick={() => navigate('/login')}>Already have an account?</button>
        </form>
      </main>
    </div>
  );
}

export default Register;
