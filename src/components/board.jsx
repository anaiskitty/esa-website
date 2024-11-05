import React from "react";
import Header from './../../src/components/navigation';
import Footer from './homepage/footer';

function Board() {
  return (
    <div className="board">
      <Header />
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
            <h1 class="font-weight-light">Board</h1>
            <p>
              This is our head of PR.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Board;