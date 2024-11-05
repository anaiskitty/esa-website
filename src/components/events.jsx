import React from "react";
import Header from './../../src/components/navigation';
import Footer from './homepage/footer';

function Events() {
  return (
    <div className="events">
      <Header />
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
            <h1 class="font-weight-light">Events</h1>
            <p>
              boo!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;