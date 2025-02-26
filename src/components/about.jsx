import React from "react";
import Header from './../../src/components/navigation';
import Footer from './homepage/footer';
import AboutProgram from "./homepage/aboutProgram";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main style={{ backgroundColor: '#ebf2fe', padding: '64px 0' }}> {/* Add padding to ensure height */}
        <AboutProgram />
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={require('./../../src/images/brazil2.png')}
                alt=""
              />
            </div>
            <div className="col-lg-5">
              <h1 style={{ fontFamily: '"DM Serif Display", serif' }} className="font-weight-light">About</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;