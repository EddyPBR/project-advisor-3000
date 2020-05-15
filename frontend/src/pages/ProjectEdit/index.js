import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import HeaderLogon from '../../components/HeaderLogon';
import './styles.scss';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

function ProjectEdit(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [project, setProject] = useState({});
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const token = sessionStorage.getItem('token');
  const productId = props.match.params.id;
  const history = useHistory();

  useEffect(() => {
    api
      .get(`projects/${productId}`, {
        headers: { authorization: 'Bearer ' + token },
      })
      .then((response) => {
        setProject(response.data.project);
        setTasks(response.data.project.tasks);
      });
  }, [productId, token]);

  function addTask() {
    if (newTask !== '') {
      const objTask = {
        _id: `${tasks[tasks.length - 1]._id + 1}`,
        title: newTask,
        completed: false,
        assignedTo: tasks[0].assignedTo
      }
      setTasks(tasks.concat(objTask))
      setNewTask('');
    }
  }

  function removeTask(id) {
    if (tasks.length <= 1) 
      return alert('The project needs at least one task');

    setTasks(tasks.filter( task => task._id !== id ));
  }

  async function handleEdit(event) {
    event.preventDefault();

    const projectTitle = `${ title === '' ? project.title : title }`;
    const projectDescription = `${ description === '' ? project.description : description }`;
    const projectTasks = tasks.map( (task) => filteringTasksKeys(task) );

    try {
      await api.put(`projects/${productId}`, {
        title: projectTitle,
        description: projectDescription,
        tasks: projectTasks
      }, {
        headers: {
          authorization: 'Bearer ' + token
        },
      })
      history.push('/profile');
    } catch(error) {
      alert('failed to perform the update, please try again');
    }
  }

  function filteringTasksKeys(task){
    const filteredTask = {
      title: task.title,
      assignedTo: task.assignedTo,
      completed: task.completed
    }
    return filteredTask;
  }

  function setChecked(task){
    task.completed === false ? task.completed = true : task.completed = false;
  }

  return (
    <>
      <HeaderLogon />
      <div className="project-content">
        <form className="form-project" onSubmit={handleEdit}>
          <div className="form-content">
            <div className="row">
              <label>{project.title}</label>
              <input 
                type="text" 
                placeholder="Title of the project"
                value={title}
                onChange={(event) => setTitle(event.target.value)} 
              />
            </div>

            <div className="row">
              <label>{project.description}</label>
              <input 
                type="text" 
                placeholder="Project description"
                value={description}
                onChange={(event) => setDescription(event.target.value)} 
              />
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
                <Link to="#" onClick={ () => { addTask() }}>
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
                      onChange={(event) => {setChecked(task)}}
                    />
                    <span>{task.title}</span>
                  </label>
                  <FiEdit size={18} color="#F4AF25" />
                  <FiTrash2 size={18} color="#F72222" onClick={() => { removeTask(task._id) }} />
                </div>
              ))}
            </div>
          </div>

          <button className="button green" onClick={(event) => { handleEdit(event) }}>Save</button>
        </form>
      </div>
    </>
  );
}

export default ProjectEdit;
