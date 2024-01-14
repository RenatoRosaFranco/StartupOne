import React from 'react';
import './style.scss';

function About() {
  return(
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='bold text-center'>Sobre Nós</h1>
            <p className='text-center'>A Startup one surgiu para acelerar projetos de startups com potenciais
            de crescimento alto, que se beneficiariam de uma estrutura,<br /> capital de
            investimento e know-how técnico para crescer exponencialmente.</p>

            <p className='text-center'>Nosso ecossistema inclui parcerias com dezenas de empresas de diversas áreas incluindo
            eCommerce, financeiras, logísticas, seguros,<br/> varejo, contabilidade, jurídico, software e
            muito mais.</p>
            <br />

              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <div className="row">
                    <div className='col-md-4'>
                      <div className='jumbotron' style={{ height: 678}}/>
                    </div>

                    <div className='col-md-8'>
                      <h3 className="bold">Por que investir em startups?</h3>
                      <br />

                      <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Investimento</a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Mentoria</a></li>
                        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Comunidade</a></li>
                      </ul>

                      <div class="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="home"><br />
                          <blockquote>
                            Investimos até <strong>R$ 150 mil</strong> em sua empresa ou ideia.
                            <span className="bold">(analise detalhada)</span>
                          </blockquote>
                          <br/>

                          <h4 className='bold'>
                            <i class="fa-solid fa-check" style={{ marginRight: 10 }}></i>
                            Aporte de capital
                          </h4>
                          <p>Aportamos capital de giro em sua empresa sem colaterais ou análise de crédito. Esse valor é seu para
                          investir em prol do crescimento de seu negócio.</p>

                          <br />
                          <h4 className='bold'>
                            <i class="fa-solid fa-check" style={{ marginRight: 10 }}></i>
                            Serviços
                          </h4>
                          <p>Lhe disponibilizaremos provedores de serviços para a sua empresa. Não tem um CNPJ? Precisa
                          de um contador? Quer contratar e não quer lidar com cálculo de folha? Faremos tudo isso e mais
                          sem você precisar gastar seu tempo e dinheiro. Também lhe daremos acesso a afertas com diversos
                          parceiros como a Amazon Web Services e a Google Cloud.</p>
                          <br />

                          <h4 className='bold'>
                            <i class="fa-solid fa-check" style={{ marginRight: 10 }}></i>
                            Participação
                          </h4>
                          <p>Nos tornaremos sócios minoritários do seu negócio. O seu sucesso será o nosso sucesso.</p>
                        </div>

                        <div role="tabpanel" className="tab-pane" id="profile"><br />
                          <h4 className='bold'>
                            <i class="fa-solid fa-check" style={{ marginRight: 10 }}></i>
                            Incentivo ao empreendedorismo
                          </h4>
                          <p>Torne possivel o sonho de empreender de jovens no Brasil. Mais investimento possibilita
                          que mais empreendedores criem empresas de sucesso. Com mais casos de sucesso, o Brasil se torna mais
                          atrativo para investidores internacionais exponencializando o crescimento das startups brasileiras.</p>
                          <br />

                          <h4 className='bold'>
                            <i class="fa-solid fa-check" style={{ marginRight: 10 }}></i>
                            Impacto possitivo na sociedade
                          </h4>
                          <p>A economia de serviços gerada por startups incentiva a educação, gera empregos e renda
                          para brasileiros. Você pode ser parte dessa mudança.</p>
                        </div>

                        <div role="tabpanel" className="tab-pane" id="messages"><br />
                          <h4 className='bold'>
                            <i class="fa-solid fa-check" style={{ marginRight: 10 }}></i>
                            Acesso a novos produtos
                          </h4>
                          <p>Seja um dos primeiros a saber sobre novos produtos e serviços. Muitas
                          startups dão descontos significativos em seus produtos para parceiros. Sendo
                          um investidor, lhe dará um nível alto de acesso a essas startups e empreendedores.</p>
                          <br />

                          <h4 className='bold'>
                            <i class="fa-solid fa-check" style={{ marginRight: 10 }}></i>
                            Seja parte do ecosistema de inovação
                          </h4>
                          <p>Você poderá aprender e ensinar com a proxima geração de empreendedores no Sul do Brasil.
                          O ecosistema de startups é um de colaboração e você poderá participar.</p>
                          <br />

                          <h4 className='bold'>
                            <i class="fa-solid fa-check" style={{ marginRight: 10 }}></i>
                            Oportunidade de aquisição
                          </h4>
                          <p>Ser parte do quadro de investidores de uma startup lhe dará acesso direto aos empreendedores.
                          Essa proximidade pode lhe gerar oportunidades futuras como uma compra ou merge da startup pela
                          sua empresa.</p>
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

export default About;