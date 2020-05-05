import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogon from '../../components/HeaderLogon';
import './styles.scss';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

export default function Profile() {
  const [projects, setProjects] = useState([]);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    api
      .get('projects', {
        headers: { authorization: 'Bearer ' + token },
      })
      .then((response) => {
        setProjects(response.data.projects);
      });
  }, [token]);

  return (
    <>
      <HeaderLogon options="true"></HeaderLogon>

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
