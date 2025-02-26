import React from "react";
import Header from './../../src/components/navigation';
import Footer from './homepage/footer';
import PhotoGallery from "./home2/photoGallery";

function Archive() {
  return (
    <div>
      <Header />
      <main style={{ backgroundColor: '#ebf2fe', padding: '64px 0' }}> 
      <div className="archive text-center"> 
        <h1 className="font-weight-light dm-serif">Photo Archive</h1> 
        <PhotoGallery />
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default Archive;