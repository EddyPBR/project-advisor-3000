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
              <h1 class="title">LET’S START YOUR PROJECT!</h1>

              <p class="text">
                The best way to complete your projects is to release dopamine
                with each completed step! and this with the project advisor 3000
                becomes even more stimulating!
              </p>

              <form class="register-form">
                <div class="row">
                  <div class="label">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name"></input>
                  </div>
                  <div class="label">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email"></input>
                  </div>
                </div>

                <div class="row">
                  <div class="label">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"></input>
                  </div>
                  <div class="label">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"></input>
                  </div>
                </div>

                <div class="row">
                    <button class="button yellow" type="button">Sign Up</button>
                </div>

                <span class="unselect-text">don't have an account?
                  <a class="link" href="#">Sign In</a>
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
