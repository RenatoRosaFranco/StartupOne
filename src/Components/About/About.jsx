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
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;