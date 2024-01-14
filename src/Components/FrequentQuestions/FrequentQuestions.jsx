import React from 'react';
import './style.scss';

function FrequentQuestions() {
  const frequentQuestions = [
    {
      question: 'Aceitam empresas em que estágio do negócio?',
      answer: 'Trabalhamos com empresas desde a fase de ideia até a fase de crescimento. Caso ainda não tenha' +
      'aberto uma empresa lhe ajudaremos a incorporar.'
    },
    {
      question: 'Como vocês escolhem as startups que irão participar?',
      answer: 'Temos um processo seletivo aberto a todos. Basta aplicar! Selecionamos as ideias equipes que consideramos' +
      'que mais se beneficiariam de nosso suporte e que tenham projetos com potencial exponencial. Não fique de fora, aplique' +
      'e leve o seu negócio para o próximo nível.'
    },
    {
      question: 'Quanto vocês investem?',
      answer: 'Entre os serviços que oferecemos e o aporte de capital investimentos aproximadamente R$ 100 mil por startup.'
    },
    {
      question: 'Que tipo de empresa vocês aceitam para aceleração?',
      answer: 'Aceitamos todos os tipos de empresa que tem potencial exponencial e são asset light.' +
      'Na dúvida, recomendamos que você aplique!'
    },
    {
      question: 'Quanto tempo é o processo de aceleração?',
      answer: "Após serem aceitas para participar de nosso programa as empresas selecionadas passarão" +
      "por um intensivo de 6 meses, conosco onde trabalharemos juntos para atingir product market fit. Após" +
      "esse período, conectaremos a sua empresa a investidores para alavancar o seu negócio."
    },
    {
      question: 'Por que vocês aceleram empresas?',
      answer: "Nós acreditamos no potencial do povo brasileiro e sabemos que com um pouco" +
      "de suporte conseguiremos criar grandes negócios."
    }
  ]

  return(
    <section className="frequentQuestions">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <h1>Perguntas <span className='bold'>Frequentes</span></h1>
                <p>Acompanhe as perguntas frequentes de nosso Hub.</p>
                <br />

                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  {frequentQuestions.map((item, index) => (
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                      <div className="panel panel-default" key={index}>
                        <div className="panel-heading" role="tab" id={`heading${index}`}>
                          <h4 className="panel-title">
                            <a
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href={`#collapse${index}`}
                              aria-expanded="false"
                              aria-controls={`#collapse${index}`}
                              style={{ textDecoration: 'none' }}
                            >
                              <i class="fa-regular fa-circle-question" style={{ marginRight: 8 }}></i>
                              {item.question}
                            </a>
                          </h4>
                        </div>
                        <div id={`collapse${index}`}
                          className="panel-collapse collapse"
                          role="tabpanel" aria-labelledby={`heading${index}`}>
                          <div className="panel-body">{item.answer}</div>
                        </div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>

              <div className='col-md-6'>
                <div
                  className='jumbotron'
                  style={{ marginTop: 50, height: 440 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrequentQuestions;