import React from "react";
import Header from './../../src/components/navigation';
import Footer from './homepage/footer';

function Events() {
  return (
    <div className="events">
      <Header />
      <main style={{ backgroundColor: '#ebf2fe', padding: '64px 0' }}> 
      <h1 style={{ fontFamily: '"DM Serif Display", serif' }} className="text-center mt-5">Events</h1>
      <div class="container">
        <div class="row align-items-center my-5">
        <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./../../src/images/halloween1.png')}
              alt=""
            />
          </div>
          <div class="col-lg-5">
          <h1 style={{ fontFamily: '"DM Serif Display", serif' }} > ESA Halloween Party 2024</h1>
            <p>
              Trick or treat. The ESA Halloween party is a signature event held every year.
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
        <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./../../src/images/halloween2.png')}
              alt=""
            />
          </div>
          <div class="col-lg-5">
          <h1 style={{ fontFamily: '"DM Serif Display", serif' }} > Sangria Party</h1>
            <p>
              Trick or treat. The ESA Halloween party is a signature event held every year.
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
        <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./../../src/images/halloween3.png')}
              alt=""
            />
          </div>
          <div class="col-lg-5">
          <h1 style={{ fontFamily: '"DM Serif Display", serif' }} > ESA Halloween Party 2023</h1>
            <p>
              Trick or treat. The ESA Halloween party is a signature event held every year.
            </p>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default Events;