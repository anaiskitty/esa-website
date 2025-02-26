import React from "react";
import Header from './../../src/components/navigation';
import Footer from './homepage/footer';

function Board() {
  return (
    <div className="board">
      <Header />
      <main style={{ backgroundColor: '#ebf2fe', padding: '64px 0' }}> 
      <h1 style={{ fontFamily: '"DM Serif Display", serif' }} className="text-center mt-5"> Board Members</h1>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./../../src/images/anna.png')}
              alt=""
            />
          </div>
          <div class="col-lg-5">
          <h1 > Marina</h1>
            <p>
              President.
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
        <div class="col-lg-5">
          <h1 > Anna</h1>
            <p>
              Vice President.
            </p>
          </div>
          <div class="col-lg-7">
          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./../../src/images/anna.png')}
              alt=""
            />
          </div>
          
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./../../src/images/anna.png')}
              alt=""
            />
          </div>
          <div class="col-lg-5">
          <h1 > Anna</h1>
            <p>
              Head of Events.
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 > Anna</h1>
              <p>
                Vice President.
              </p>
            </div>
          <div class="col-lg-7">
          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./../../src/images/anna.png')}
              alt=""
            />
          </div>

        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default Board;