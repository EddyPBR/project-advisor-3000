import React, { Component } from 'react';
import './styles.scss';

export default class home extends Component {
  render() {
    return (
      <>
        <header class="project-header">
        <div className="header-row">
          <div class="f-col">
            <div class="row">
              <span>Bem vindo(a),</span>
              <a href="#">Edvaldo junior</a>
            </div>
            <input class="search" type="text" id="search" placeholder="Search Project..." />
          </div>
          <div class="l-col">
            <a href="#">Sign Out</a>
          </div>
        </div>

        <div class="projects-options">
          <div class="opt-row">
            <a class="add-project" href="#">Register new project</a>
          </div>
        </div>
      </header>
        <div class="cards-container">
          <div className="cards-flex-grid">

            <div className="card">
              <div className="card-header">
                <b class="title">Lorem ipsum dolor</b>
                <div class="links">
                  <a class="erase" href="#">ok</a>
                  <a class="edit" href="#">ok</a>
                </div>
              </div>

              <div class="card-content">
                <div className="card-body">
                  <p>Ultrices erat sit amet neque commodo vehicula. Etiam libero ante, finibus.</p>
                </div>

                <div className="card-footer">
                  <a href="#">See Project</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}
