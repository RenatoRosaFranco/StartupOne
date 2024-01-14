import React from 'react';
import './style.scss';

function Investors() {
  return(
    <section className="investors">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className='row'>
              <h1 className="bold text-center">Seja um investidor</h1>
              <p className="text-center">Complete o seu portifólio de investimento e se conecte diretamente
              com startups <br />com grande potencial de crescimento.</p>
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
                        <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Rentabilidade</a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Impacto social</a></li>
                        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Acesso a inovação</a></li>
                      </ul>

                      <div class="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="home"><br />
                          <h4 className='bold'>
                            <i class="fa-solid fa-check" style={{ marginRight: 10 }}></i>
                            Alto retorno financeiro
                          </h4>
                          <p>A maioria das empresas listadas publicamente em bolsas de valores já foram startups um dia.
                          Como startups, elas receberam uma sequência de aportes a medida que cresciam incrementando cada
                          vez mais os seus valuations até serem listadas em bolsa. Grande parte do retorno financeiro para
                          os investidores ocorreram antes da listagem. Investimento nas startups em fases iniciais de
                          desenvolvimento, lhe da acesso a essas empresas num desconto significativo para o preço que
                          um dia elas podem vir a ter listadas.</p>

                          <br />
                          <h4 className='bold'>
                            <i class="fa-solid fa-check" style={{ marginRight: 10 }}></i>
                            Diversificação
                          </h4>
                          <p>Uma estratégia comum em redução do risco em um portifólio de investimentos é a diversificação.
                          Para diversificar um portifólio, é necessário uma seleção de ativos não correlacionados. Por conta
                          do graude inovação e da fase de desenvolvimento da empresa, cotas em startups tendem a não
                          correlacionar fortemente com outros ativos financeiros tornando investimentos em startups
                          uma boa opção para diversificar o portifólio.</p>
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
      </div>
    </section>
  )
}

export default Investors;