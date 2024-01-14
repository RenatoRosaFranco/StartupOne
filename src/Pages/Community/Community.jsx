import React from 'react';
import Team from '../../Components/Team/Team';
import FrequentQuestions from '../../Components/FrequentQuestions/FrequentQuestions';
import './style.scss';

function Community() {
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
    <section className='community'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 className='bold text-center'>Nossa Comunidade</h1>
                <p className='text-center'>Empresários, diretores e lideres de empresas e startups e grandes
                empresas compôem o ecossistema da StartupOne. <br/>Será que a sua startup
                não se beneficiaria de ter a mentoria de um desses nomes? Que tal ter
                uma dessas empresas como seu primeiro cliente?<br/> ou quem sabe um dos
                investidores do grupo não acredita no potencial do seu negócio?<br/> conheça alguns
                dos membros de nossas comunidade abaixo.</p>
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
      </div>

      <FrequentQuestions />
    </section>
  )
}

export default Community;