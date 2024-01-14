import React from 'react';

function Banner() {
  return(
    <section className="banner" style={{ border: '1px solid #EEE', backgroundColor: '#eee', height: 45, paddingTop: 5, paddingBottom: 5}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-2">
              <h5 className="uppercase" style={{ textTransform: 'uppercase' }}>Nós estamos em:</h5>
            </div>

            <div className="col-md-10">
              <ul className="list-unstyled list-inline" style={{ marginTop: 8}}>
                <li>
                  <p>
                    <i class="fa-solid fa-location-dot" style={{ marginRight: 5 }}></i>
                    São Borja
                  </p>
                </li>
                <li>
                  <p>
                     <i class="fa-solid fa-location-dot" style={{ marginRight: 5 }}></i>
                    Santiago
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fa-solid fa-location-dot" style={{ marginRight: 5 }}></i>
                    Uruguaiana
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fa-solid fa-location-dot" style={{ marginRight: 5 }}></i>
                    São Luiz Gonzaga
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fa-solid fa-location-dot" style={{ marginRight: 5 }}></i>
                    Santa Maria
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;