import React from 'react';
import './style.scss';

function Contact() {
  return(
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h2 className="bold">Fale Conosco</h2>
                    <p>Precisa de ajuda com a aplicação, tem interesse em ser um mentor
                    ou tem outro assunto relacionado a startups e empreendedorismo?
                    Estamos a disposição para lhe ajudar.</p>
                    <hr />

                    <div className="row">
                      <div className="col-md-12">
                        <div className="media">
                          <div className="media-left">
                            <i className="fa-regular fa-envelope ico"></i>
                          </div>
                          <div className="media-body">
                            <h4 className='bold'>Email:</h4>
                            <p>sac@startupone.com.br</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="media">
                          <div className="media-left">
                            <i className="fa-solid fa-mobile ico"></i>
                          </div>
                          <div className="media-body">
                            <h4 className="bold">WhatsApp:</h4>
                            <p>+55 (55) 99627-6161</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;