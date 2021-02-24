import React from 'react';
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{marginBottom: 16}}>
  <div className="container">
    <Link className="navbar-brand" to="/">Lista de Taferas</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       <li className="nav-item">
          <Link className="nav-link" to="/">Exibir Lista</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add">Incluir Tarefa</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;