import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Footer() {
  const subscriptionLink = 'https://google.com.br';

  const links = [
    {
      title: 'Twitter',
      icon_class: 'fa-brands fa-x-twitter',
      url: 'https://twitter.com/'
    },
    {
      title: 'Facebook',
      icon_class: 'fa-brands fa-facebook',
      url: 'https://facebook.com/'
    },
    {
      title: 'Instagram',
      icon_class: 'fa-brands fa-instagram',
      url: 'https://instagram.com/'
    },
    {
      title: 'Linkedin',
      icon_class: 'fa-brands fa-linkedin',
      url: 'https://linkedin.com/'
    }
  ]

  return(
    <footer className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <h2 className='bold'>StartupOne</h2>
                <p>R. Candido Falcão, 1155.</p>
                <p>São Borja, Rio Grande do Sul - RS</p>
                <p><span className='bold'>CEP</span> 97670-000</p>
              </div>

              <div className="col-md-9">
                <h4 className="bold uppercase">Links Uteis</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">
                      <i className="fa-solid fa-chevron-right ico"></i>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/community">
                      <i className="fa-solid fa-chevron-right ico"></i>
                      Comunidade
                    </Link>
                  </li>
                  <li>
                    <Link to="/investors">
                      <i className="fa-solid fa-chevron-right ico"></i>
                      Investidores</Link>
                  </li>
                  <li>
                    <Link to={subscriptionLink}>
                      <i className="fa-solid fa-chevron-right ico"></i>
                      Edital de Seleção</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-solid fa-chevron-right ico"></i>
                      Termos de privacidade
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <hr />
            <div className="copyright row">
              <div className="col-md-6">
                <p>
                  &copy;
                  Copyright <span className='bold'>StartupOne</span>.
                  Todos os Direitos Reservados. Powered by
                  <Link className='square' to='https://square.pl'> Square</Link>
                </p>
              </div>

              <div className="col-md-6 text-right">
                <ul className="list-unstyled list-inline">
                  { links.map((link, index) => {
                    return(
                      <li key={index}>
                        <a href={link.url} title={link.title}>
                          <i className={`${link.icon_class} social-ico`} />
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;