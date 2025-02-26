import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../homepage/footer";
import Header from "../navigation";

function Blog() {
  return (
    <div className="home">
      <Header />
      <main style={{ backgroundColor: '#ebf2fe', padding: '64px 0' }}> 
      <div class="container">
        <h1 style={{ fontFamily: '"DM Serif Display", serif' }} className="text-center mt-5">Blog</h1>
        <Outlet />
      </div>
      </main>
     <Footer />
    </div>
  );
}

export default Blog;