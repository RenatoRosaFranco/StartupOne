import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import './style.scss';

function Startups() {
  const options = {
    items: 7,
    nav: false,
    dots: false,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 1000,
      pauseOnHover: true
    }
  }

  const items = [
    <div key={1}>
      <div className='jumbotron' />
    </div>,
    <div key={2}>
      <div className='jumbotron' />
    </div>,
    <div key={3}>
      <div className='jumbotron' />
    </div>,
    <div key={4}>
      <div className='jumbotron' />
    </div>,
    <div key={5}>
      <div className='jumbotron' />
    </div>,
    <div key={6}>
      <div className='jumbotron' />
    </div>,
    <div key={7}>
      <div className='jumbotron' />
    </div>,
  ]

  return(
    <section className='startups'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <OwlCarousel options={options}>
              {items}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Startups;