import React from 'react';
import './style.scss';

function Ecossystem() {
  return(
    <section className="ecossystem">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className='row'>
              <div className='col-md-3'>
                <div class='panel panel-default'>
                  <div class='panel-body text-center'>
                    <h1><i class="fa-solid fa-chart-simple"></i></h1>
                    <h3 className="bold">Capital Inicial</h3>
                    <p>Aportamos em todas as startups que
                    aceleramos para você operacionalizar
                    a sua ideia.</p>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className="panel panel-default">
                  <div className="panel-body text-center">
                    <h1 className="bold"><i class="fa-solid fa-money-check-dollar"></i></h1>
                    <h3 className="bold">Suporte Contábil</h3>
                    <p>Nosso parceiro de contabilidade irá lhe
                    oferecer toda a estrutura contábil que você
                    precisa para seu negócio.</p>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='panel panel-default'>
                  <div className='panel-body text-center'>
                    <h1 className="bold"><i class="fa-solid fa-gavel"></i></h1>
                    <h3 className="bold">Suporte Jurídico</h3>
                    <p>Nossos advogados especializados em
                    startups irão lhe ajudar a se resguardar
                    contra imprevistos.</p>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='panel panel-default'>
                  <div className='panel-body text-center'>
                    <h1 className="bold"><i class="fa-solid fa-chalkboard-user"></i></h1>
                    <h3 className="bold">Mentoria</h3>
                    <p>Você terá acesso direto a líderes de
                    sua vertical que lhe daram dicas
                    para crescer sua startup.</p>
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

export default Ecossystem;