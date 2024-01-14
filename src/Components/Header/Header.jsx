import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Header() {
  return(
    <header className='header'>
      <nav className="navbar navbar-default">
        <div className="container container-fluid">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" 
            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <Link to="/" className="navbar-brand">StartupOne</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/community">Comunidade</Link></li>
              <li><Link to="/investors">Investidores</Link></li>
              <li><Link to="#faq">Perguntas Frequentes</Link></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" className="btn btn-primary btn-inscreva-se">Se Inscreva!</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;