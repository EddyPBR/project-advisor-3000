import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { FiPower, FiSearch, FiUser } from 'react-icons/fi';

import api from '../../services/api';

export default function Project(props) {
  const [project, setProject] = useState({});
  const [tasks, setTasks] = useState([]);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    api
      .get(`projects/${props.match.params.id}`, {
        headers: { authorization: 'Bearer ' + token },
      })
      .then((response) => {
        setProject(response.data.project);
        setTasks(response.data.project.tasks);
      });
  }, [token]);

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
              <input type="text" id="search" placeholder="Search Project..." />
            </div>
          </div>
          <div className="l-col">
            <Link to="/" className="logout">
              <FiPower size={22} color="#F72222" />
              <span>Sign Out</span>
            </Link>
          </div>
        </div>

        <div className="search mobile">
          <FiSearch size={18} />
          <input type="text" id="search" placeholder="Search Project..." />
        </div>

        <div className="projects-options" />
      </header>

      <div className="project-content">
        <form className="form-project">
          <div className="form-content">
            <div className="row">
              <h1 className="title green">{project.title}</h1>
            </div>

            <div className="row">
              <h2 className="text">{project.description}</h2>
            </div>
          </div>

          <div className="form-tasks">
            <b className="title green">Tasks List</b>
            <div className="tasks-list">

              {tasks.map((task) => (
                <div key={task._id} className="task-row">
                  <label>
                    <input type="checkbox" id="Task" name="new Task" 
                    defaultChecked={task.completed}
                    />
                    <span>{task.title}</span>
                  </label>
                </div>
              ))}

            </div>
          </div>

          <Link to={`/project/edit/${props.match.params.id}`} className="button yellow">
            Edit Project
          </Link>
          
        </form>
      </div>
    </>
  );
}
