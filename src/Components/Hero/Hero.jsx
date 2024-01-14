import React from 'react';
import Logo from '../../Assets/Images/rocket.png'
import './style.scss';

import ScrollToTop from 'react-scroll-to-top';

function Hero() {
  const subscriptionLink = 'https://google.com.br';

  const goToSubscription = () => {
    window.location.href = subscriptionLink;
  }

  return(
    <section className='hero'>
      <ScrollToTop smooth />

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className='hero-content'>
              <img src={Logo} width={400} height={300} />
              <h1 className='bold title'>Bem vindos a <span className='brand'>StartupOne</span></h1>
              <p className='subtitle text-center'>Participe do nosso processo de aceleração e aumente as chances de<br /> 
              sua startup se tornar o próximo unícornio brasileiro.</p>

              <div className='text-center'>
                <button className='call-to-action btn btn-primary btn-lg'
                  onClick={goToSubscription}>
                  Quero me inscrever!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
