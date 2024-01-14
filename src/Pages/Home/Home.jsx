import React from 'react';
import './style.scss';

import Header             from '../../Components/Header/Header';
import Hero               from '../../Components/Hero/Hero';
import Startups           from '../../Components/Startups/Startups';
import Ecossystem         from '../../Components/Ecossystem/Ecossystem';
import About              from '../../Components/About/About';
import Team               from '../../Components/Team/Team';
import Blog               from '../../Components/Blog/Blog';
import FrequentQuestions  from '../../Components/FrequentQuestions/FrequentQuestions';
import Contact            from '../../Components/Contact/Contact';
import Footer             from '../../Components/Footer/Footer';

function Home() {
  return(
    <>
      <Hero />
      <Startups />
      <Ecossystem />
      <About />
      <Team />
      <Blog />
      <FrequentQuestions />
      <Contact />
    </>
  )
}

export default Home;