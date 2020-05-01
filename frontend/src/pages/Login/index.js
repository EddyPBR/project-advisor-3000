import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isAuthenticated } from '../../utils';
import './styles.scss';
import mainImage from '../../assets/main-image.png';

import api from '../../services/api';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  if ( isAuthenticated() ) history.push('/profile');

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await api.post('auth/authenticate', {
        email,
        password,
      });
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('userName', response.data.user.name);
      history.push('/profile');
    } catch (error) {
      alert('failed to perform the login, please try again');
    }
  }

  return (
    <div className="main-container">
      <div className="main-row">
        <div className="main-f-column">
          <div className="main-content">
            <h1 className="title">LET’S RELEASE DOPAMINE!</h1>

            <p className="text">
              The best way to complete your projects is to release dopamine with
              each completed step! and this with the project advisor 3000
              becomes even more stimulating!
            </p>

            <form className="login-form" onSubmit={handleLogin}>
              <div className="label">
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={ event => setEmail(event.target.value) }
                />
              </div>

              <div className="label">
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={ event => setPassword(event.target.value) }
                />
              </div>

              <div className="row">
                <button className="button yellow" type="submit">
                  Sign In
                </button>
                <Link className="link" to="/recover">
                  Forgot your password?
                </Link>
              </div>

              <span className="unselect-text">
                don't have an account?
                <Link className="link" to="/login">
                  Sign up
                </Link>
              </span>
            </form>
          </div>
        </div>

        <div className="main-l-column">
          <img src={mainImage} alt="Project Advisor 3000" />
        </div>
      </div>
    </div>
  );
}
