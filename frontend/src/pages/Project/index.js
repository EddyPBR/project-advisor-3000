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

export default class Project extends Component {
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
              <Link to="/" class="logout">
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

            <div class="form-content">
              <div class="row">
                <label>Title</label>
                <input type="text" placeholder="Title of the project"></input>
              </div>

              <div class="row">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Description of your project"
                ></input>
              </div>

              <div class="row">
                <label>Tasks</label>
                <div class="row-add-task">
                  <input type="text" placeholder="Name of the task" />
                  <Link to="#">
                    <FiPlus size={22} color="#7AF49C" />
                    <span>Add</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="form-tasks">
              <b>Tasks List</b>
              <div className="tasks-list">
                <div className="task-row">
                  <label>
                    <input type="checkbox" id="Task" name="new Task" />
                    <span>Task</span>
                  </label>
                  <FiEdit size={18} color="#F4AF25" />
                  <FiTrash2 size={18} color="#F72222" />
                </div>

                <div className="task-row">
                  <label>
                    <input type="checkbox" id="Task" name="new Task" />
                    <span>New Task</span>
                  </label>
                  <FiEdit size={18} color="#F4AF25" />
                  <FiTrash2 size={18} color="#F72222" />
                </div>

              </div>
            </div>

            <button class="button yellow">Register</button>

          </form>
        </div>
      </>
    );
  }
}
