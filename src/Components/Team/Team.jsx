import React from 'react';
import './style.scss';

function Team() {
  let team = [
    {
      avatar: 'https://innostudio.de/fileuploader/images/default-avatar.png',
      name: 'Renato Franco',
      role: 'Investidor | CEO, Engenheiro Software',
      location: 'São Paulo / São Borja / Polônia',
      linkedin: ''
    },
    {
      avatar: 'https://innostudio.de/fileuploader/images/default-avatar.png',
      name: 'Fred Janot',
      role: 'Investidor | CEO',
      location: 'São Borja - RS',
      linkedin: ''
    },
    {
      avatar: 'https://innostudio.de/fileuploader/images/default-avatar.png',
      name: 'Hanzo Kimura',
      role: 'Investidor | UI - UX Designer',
      location: 'Osaka - Japan',
      linkedin: ''
    }
  ]

  return(
    <section className="team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <h1 className="title bold text-center">Nosso Time</h1>
              <p className='subtitle text-center'>Temos uma equipe de empreendedores com expêrience em diversas
              verticais,<br /> prontos para lhe ajudar a crescer a sua empresa.</p>
              <br />

              <div className='row'>
                {team.map((investor, index) => {
                  return(
                    <a href={ (investor.linkedin.length === 0) ? '#' : investor.linkedin } key={index} >
                      <div className='col-md-4'>
                        <div className='panel panel-default team-block'
                          style={{ backgroundImage: `url(${investor.avatar})` }}>
                          <div className='panel-body'>
                            <div className='investor-details'>
                              <h5 className='bold investor-name'>{investor.name}</h5>
                              <p className='investor-location'>{investor.location}</p>
                              <p className='investor-role'>{investor.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team;