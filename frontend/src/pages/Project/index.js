import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogon from '../../components/HeaderLogon';
import './styles.scss';

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
  }, [props.match.params.id, token]);

  return (
    <>
      <HeaderLogon />
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
