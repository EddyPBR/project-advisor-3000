import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import {
  FiEdit,
  FiPlus,
  FiPower,
  FiSearch,
  FiTrash2,
  FiUser,
} from 'react-icons/fi';

export default class home extends Component {
  render() {
    return (
      <>
        <header className="project-header">
          <div className="header-row">
            <div className="f-col">
              <div className="row">
                <FiUser size={22} />
                <span>Bem vindo(a),</span>
                <Link to="#">Edvaldo Junior</Link>
              </div>
              <div className="search">
                <FiSearch size={18} />
                <input
                  type="text"
                  id="search"
                  placeholder="Search Project..."
                />
              </div>
            </div>
            <div className="l-col">
              <Link to="#" class="logout">
                <FiPower size={22} color="#F72222" />
                <span>Sign Out</span>
              </Link>
            </div>
          </div>

          <div className="projects-options">
            <div className="opt-row">
              <Link className="add-project" to="#">
                <FiPlus size={22} />
                Register new project
              </Link>
            </div>
          </div>
        </header>

        <div className="cards-container">
          <div className="cards-flex-grid">

              <div className="card">
                <div className="card-header">
                  <b className="title">Lorem ipsum dolor</b>
                  <div className="links">
                    <Link className="edit" to="#">
                      <FiEdit size={18} />
                    </Link>
                    <Link className="erase" to="#">
                      <FiTrash2 size={18} />
                    </Link>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-body">
                    <p>
                      Ultrices erat sit amet neque commodo vehicula. Etiam
                      libero ante, finibus.
                    </p>
                  </div>

                  <div className="card-footer">
                    <Link to="#">See Project</Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <b className="title">Lorem ipsum dolor</b>
                  <div className="links">
                    <Link className="edit" to="#">
                      <FiEdit size={18} />
                    </Link>
                    <Link className="erase" to="#">
                      <FiTrash2 size={18} />
                    </Link>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-body">
                    <p>
                      Ultrices erat sit amet neque commodo vehicula. Etiam
                      libero ante, finibus.
                    </p>
                  </div>

                  <div className="card-footer">
                    <Link to="#">See Project</Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <b className="title">Lorem ipsum dolor</b>
                  <div className="links">
                    <Link className="edit" to="#">
                      <FiEdit size={18} />
                    </Link>
                    <Link className="erase" to="#">
                      <FiTrash2 size={18} />
                    </Link>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-body">
                    <p>
                      Ultrices erat sit amet neque commodo vehicula. Etiam
                      libero ante, finibus.
                    </p>
                  </div>

                  <div className="card-footer">
                    <Link to="#">See Project</Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <b className="title">Lorem ipsum dolor</b>
                  <div className="links">
                    <Link className="edit" to="#">
                      <FiEdit size={18} />
                    </Link>
                    <Link className="erase" to="#">
                      <FiTrash2 size={18} />
                    </Link>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-body">
                    <p>
                      Ultrices erat sit amet neque commodo vehicula. Etiam
                      libero ante, finibus.
                    </p>
                  </div>

                  <div className="card-footer">
                    <Link to="#">See Project</Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <b className="title">Lorem ipsum dolor</b>
                  <div className="links">
                    <Link className="edit" to="#">
                      <FiEdit size={18} />
                    </Link>
                    <Link className="erase" to="#">
                      <FiTrash2 size={18} />
                    </Link>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-body">
                    <p>
                      Ultrices erat sit amet neque commodo vehicula. Etiam
                      libero ante, finibus.
                    </p>
                  </div>

                  <div className="card-footer">
                    <Link to="#">See Project</Link>
                  </div>
                </div>
              </div>

              
          </div>
        </div>
      </>
    );
  }
}
