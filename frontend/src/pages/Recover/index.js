import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import mainImage from '../../assets/main-image.png';

export default class Recover extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-row">
          <div className="main-f-column">

            <div className="main-content">
              <h1 className="title">LET’S RECOVER YOUR ACCESS!</h1>

              <p className="text">
                The best way to complete your projects is to release dopamine
                with each completed step! and this with the project advisor 3000
                becomes even more stimulating!
              </p>

              <form className="recover-form">

                <div className="label">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email"></input>
                </div>

                <div className="row">
                    <button className="button yellow" type="button">Send Mail</button>
                </div>

                <span className="unselect-text">don't have an account?
                  <Link className="link" href="/login">Sign In</Link>
                </span>

                <span className="unselect-text">already have a account?
                  <Link className="link" href="/register">Sign Up</Link>
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
