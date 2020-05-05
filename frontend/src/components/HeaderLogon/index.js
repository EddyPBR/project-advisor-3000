import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';
import { FiPlus, FiPower, FiSearch, FiUser } from 'react-icons/fi';

export default function HeaderLogon(props) {
  const userName = sessionStorage.getItem('userName');
  const history = useHistory();

  function handleLogout() {
    sessionStorage.clear();
    history.replace('/');
  }

  return (
    <header className="project-header">
      <div className="header-row">
        <div className="f-col">
          <div className="row">
            <FiUser size={22} />
            <span>Bem vindo(a),</span>
            <Link to="/profile">{userName}</Link>
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
        {props.options && (
          <div className="opt-row">
            <Link className="add-project" to="#">
              <FiPlus size={22} />
              Register new project
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
