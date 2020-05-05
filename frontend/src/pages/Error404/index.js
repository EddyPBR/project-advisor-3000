import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import mainImage from '../../assets/main-image.png';

export default function NoRouteFound() {
  return (
    <div className="main-container">
      <div className="main-row">
        <div className="main-f-column">
          <div className="main-content">
            <h1 className="title">OPS! DOPAMINE IS NOT HERE!</h1>

            <p className="text">
              My buddy here doesn't have dopamine, But I know where to find it, 
              click the button below and I'll wash you there.
            </p>

            <Link to="/" className="button yellow home">
              Go Home
            </Link>
          </div>
        </div>

        <div className="main-l-column">
          <img src={mainImage} alt="Project Advisor 3000" />
        </div>
      </div>
    </div>
  );
}
