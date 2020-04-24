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
          <div className="container">
            <div className="form-project">

              <form>
                <div class="form-content">
                  <div class="row">
                    <label>Title</label>
                    <input type="text" placeholder="Title of the project"></input>
                  </div>

                  <div class="row">
                    <label>Description</label>
                    <input type="text" placeholder="Description of your project"></input>
                  </div>

                  <div class="row">
                    <label>Tasks</label>                    
                    <div class="row-add-task">
                      <input type="text" placeholder="new Task" />
                      <Link to="#" class="add-task">
                        <FiPlus size={22} color="#F72222" />
                        <span>Add</span>
                      </Link>
                    </div>
                  </div>
                  
                </div>

                <div className="form-tasks">
                  <b>Tasks List</b>
                  <div className="tasks-list">

                    <div className="task-row">
                      <input type="checkbox" id="Task" name="Task" />
                      <label for="Task">Task</label>
                    </div>

                    <div className="task-row">
                      <input type="checkbox" id="Task" name="new Task" />
                      <label for="new Task">new Task</label>
                      <FiEdit size={18} color="#F72222" />
                      <FiTrash2 size={18} color="#F72222" />
                    </div>

                  </div>
                </div>

              </form>

            </div>
          </div>
        </div>

      </>        
    );
  }
}
