import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../homepage/footer";
import Header from "../navigation";

function Blog() {
  return (
    <div className="home">
      <Header />
      <div class="container">
        <h1 className="text-center mt-5">Blogs</h1>
        <Outlet />
      </div>
     <Footer />
    </div>
  );
}

export default Blog;