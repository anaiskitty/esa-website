import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div style={{ padding: '20px' }}>
        <div className="container">
          <Link to="/blog/halloween-2024" style={linkStyle}>
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={require('./../../../src/images/halloween2.png')}
                  alt=""
                />
              </div>
              <div className="col-lg-5">
                <h1 className="font-weight-light">ESA Halloween 2024</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="container">
          <Link to="/blog/this-is-another-post-title" style={linkStyle}>
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={require('./../../../src/images/brazil1.png')}
                  alt=""
                />
              </div>
              <div className="col-lg-5">
                <h1 className="font-weight-light">Welcome to the ESA Blog</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="container">
          <Link to="/blog/this-is-a-final-post-title" style={linkStyle}>
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={require('./../../../src/images/latin.png')}
                  alt=""
                />
              </div>
              <div className="col-lg-5">
                <h1 className="font-weight-light">Guide to Navigating Tsinghua</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Define the link styles
const linkStyle = {
  textDecoration: 'none', // Remove underline
  color: 'black', // Set text color to black
  cursor: 'pointer', // Change cursor to pointer
};

export default Posts;