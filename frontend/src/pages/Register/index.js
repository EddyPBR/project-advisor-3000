import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isAuthenticated } from '../../utils';
import './styles.scss';
import mainImage from '../../assets/main-image.png';

import api from "../../services/api";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    if ( isAuthenticated() ) history.push('/profile');

    if (password !== checkPassword) {
      alert('Password and confirmation must be the same');
      return false
    }

    try {
      const response = await api.post('auth/register', {
        name,
        email,
        password,
      });
      
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('userName', response.data.user.name);
      history.push('/profile');
    } catch (error) {
      alert('failed to perform the registration, please try again');
    }
  }


  return (
    <div className="main-container">
      <div className="main-row">
        <div className="main-f-column">
          <div className="main-content">
            <h1 className="title">LET’S START YOUR PROJECT!</h1>

            <p className="text">
              The best way to complete your projects is to release dopamine with
              each completed step! and this with the project advisor 3000
              becomes even more stimulating!
            </p>

            <form className="register-form" onSubmit={handleRegister}>
              <div className="row">
                <div className="label">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={ event => setName(event.target.value) }
                  />
                </div>
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
              </div>

              <div className="row">
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
                <div className="label">
                  <label htmlFor="checkPassword">Confirm your password</label>
                  <input 
                    type="password"
                    id="checkPassword"
                    name="checkPassword"
                    value={checkPassword}
                    onChange={ event => setCheckPassword(event.target.value) }
                  />
                </div>
              </div>

              <div className="row">
                <button className="button yellow" type="submit" >
                  Sign Up
                </button>
              </div>

              <span className="unselect-text">
                don't have an account?
                <Link className="link" to="/login">
                  Sign In
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
