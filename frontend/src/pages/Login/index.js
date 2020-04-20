import React, { Component } from 'react';
import './styles.scss';
import mainImage from '../../assets/main-image.png';

export default class home extends Component {
  render() {
    return (
      <div class="main-container">
        <div class="main-row">
          <div class="main-f-column">

            <div class="main-content">
              <h1 class="title">LET’S RELEASE DOPAMINE!</h1>

              <p class="text">
                The best way to complete your projects is to release dopamine
                with each completed step! and this with the project advisor 3000
                becomes even more stimulating!
              </p>

              <form class="login-form">
                <div class="label">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email"></input>
                </div>

                <div class="label">
                  <label for="password">Password</label>
                  <input type="password" id="password" name="password"></input>
                </div>

                <div class="row">
                    <button class="button yellow" type="button">Sign In</button>
                    <a class="link" href="#">Forgot your password?</a>
                </div>

                <span class="unselect-text">don't have an account?
                  <a class="link" href="#">Sign up</a>
                </span>

              </form>

            </div>
          </div>

          <div class="main-l-column">
            <img src={mainImage} alt="Project Advisor 3000" />
          </div>

        </div>
      </div>
    );
  }
}