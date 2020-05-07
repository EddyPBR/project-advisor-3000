import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogon from '../../components/HeaderLogon';
import './styles.scss';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

function ProjectEdit(props) {
  const [project, setProject] = useState({});
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
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

  function handleEdit(event) {
    event.preventDefault();
    console.log();
  }

  function addTask() {
    if (newTask !== '') {
      const objTask = { 
        _id: `${tasks[0]._id + 1}`,
        title: newTask,
        completed: false,
        assignedTo: tasks[0].assignedTo
      }
      setTasks(tasks.concat(objTask))
      setNewTask('');
    }
  }

  return (
    <>
      <HeaderLogon />
      <div className="project-content">
        <form className="form-project" onSubmit={handleEdit}>
          <div className="form-content">
            <div className="row">
              <label>{project.title}</label>
              <input type="text" placeholder="Title of the project" />
            </div>

            <div className="row">
              <label>{project.description}</label>
              <input type="text" placeholder="Project description" />
            </div>

            <div className="row">
              <label>Add Task</label>
              <div className="row-add-task">
                <input
                  type="text"
                  placeholder="Name of the task"
                  value={newTask}
                  onChange={(event) => setNewTask(event.target.value)}
                />
                <Link to="#" onClick={addTask}>
                  <FiPlus size={22} color="#7AF49C" />
                  <span>Add</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="form-tasks">
            <b>Tasks List</b>
            <div className="tasks-list">
              {tasks.map((task) => (
                <div key={task._id} className="task-row">
                  <label>
                    <input
                      type="checkbox"
                      id="Task"
                      name="new Task"
                      defaultChecked={task.completed}
                    />
                    <span>{task.title}</span>
                  </label>
                  <FiEdit size={18} color="#F4AF25" />
                  <FiTrash2 size={18} color="#F72222" />
                </div>
              ))}
            </div>
          </div>

          <button className="button green">Save</button>
        </form>
      </div>
    </>
  );
}

export default ProjectEdit;
