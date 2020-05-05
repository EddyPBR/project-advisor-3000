import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';
import {
  FiEdit,
  FiPlus,
  FiPower,
  FiSearch,
  FiTrash2,
  FiUser,
} from 'react-icons/fi';

import api from '../../services/api';

export default function List() {
  const [projects, setProjects] = useState([]);
  const userName = sessionStorage.getItem('userName');
  const token = sessionStorage.getItem('token');

  const history = useHistory();
  
  useEffect(() => {
    api
      .get('projects', {
        headers: { authorization: 'Bearer ' + token },
      })
      .then((response) => {
        setProjects(response.data.projects);
      });
  }, [token]);

  function handleLogout() {
    sessionStorage.clear();
    history.replace('/');
  }

  return (
    <>
      <header className="project-header">
        <div className="header-row">
          <div className="f-col">
            <div className="row">
              <FiUser size={22} />
              <span>Bem vindo(a),</span>
              <Link to="./profile">{userName}</Link>
            </div>
            <div className="search">
              <FiSearch size={18} />
              <input type="text" id="search" placeholder="Search Project..." />
            </div>
          </div>
          <div className="l-col">
            <Link onClick={handleLogout} to="#" className="logout">
              <FiPower size={22} color="#F72222" />
              <span>Sign Out</span>
            </Link>
          </div>
        </div>

        <div className="search mobile">
          <FiSearch size={18} />
          <input type="text" id="search" placeholder="Search Project..." />
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

          {projects.map((project) => (
            <div key={project._id} className="card">
              <div className="card-header">
                <b className="title">{project.title}</b>
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
                  <p>{project.description}</p>
                </div>

                <div className="card-footer">
                  <Link to={`./project/${project._id}`}>See Project</Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
