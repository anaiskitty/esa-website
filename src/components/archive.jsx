import React from "react";
import Header from './../../src/components/navigation';
import Footer from './homepage/footer';
import PhotoGallery from "./home2/photoGallery";

function Archive() {
  return (
    <div>
      <Header />
      <div className="archive text-center"> 
        <h1 className="font-weight-light dm-serif">Archive</h1> 
        <PhotoGallery />
      </div>
      <Footer />
    </div>
  );
}

export default Archive;