import React from "react";
import Header from './../../src/components/navigation';
import Footer from './homepage/footer';

function Merch() {
  return (
    <div className="merch">
      <Header />
      <main style={{ backgroundColor: '#ebf2fe', padding: '64px 0' }}> 
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./../../src/images/merch1.png')}
              alt=""
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./../../src/images/merch2.png')}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Merch</h1>
            <p>
              I'll add buttons and prices and more designs later...
            </p>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default Merch;