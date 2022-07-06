import React from 'react';
import logo from './logo.png';
import './index.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="header_logo" src={logo} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/Main" className="nav-link active" > Home </Link>
              <Link to="/Contatos" className="nav-link"> Contatos </Link>
              <Link to="/Portifolio" className="nav-link"> Portifolio </Link>
              <Link to="/Formacao" className="nav-link"> Formação </Link>
              <button type="button" className="btn btn-success">Whatsapp</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;