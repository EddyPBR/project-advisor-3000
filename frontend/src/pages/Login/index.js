import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import mainImage from '../../assets/main-image.png';

export default class Login extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-row">
          <div className="main-f-column">

            <div className="main-content">
              <h1 className="title">LET’S RELEASE DOPAMINE!</h1>

              <p className="text">
                The best way to complete your projects is to release dopamine
                with each completed step! and this with the project advisor 3000
                becomes even more stimulating!
              </p>

              <form className="login-form">
                <div className="label">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email"></input>
                </div>

                <div className="label">
                  <label for="password">Password</label>
                  <input type="password" id="password" name="password"></input>
                </div>

                <div className="row">
                    <button className="button yellow" type="button">Sign In</button>
                    <Link className="link" href="/recover">Forgot your password?</Link>
                </div>

                <span className="unselect-text">don't have an account?
                  <Link className="link" href="/login">Sign up</Link>
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
}
