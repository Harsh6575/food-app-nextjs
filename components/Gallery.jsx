/* eslint-disable @next/next/no-img-element */
import React from "react";
import GalleryContent from "./GalleryContent";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        our food <span> gallery </span>
      </h1>

      <div className="box-container">
        <GalleryContent
            foodName="tasty food"
            imgSrc="images/g-1.jpg"
        />
        <GalleryContent
            foodName="tasty food"
            imgSrc="images/g-2.jpg"
        />
        <GalleryContent
            foodName="tasty food"
            imgSrc="images/g-3.jpg"
        />
        <GalleryContent
            foodName="tasty food"
            imgSrc="images/g-4.jpg"
        />
        <GalleryContent
            foodName="tasty food"
            imgSrc="images/g-5.jpg"
        />
        <GalleryContent
            foodName="tasty food"
            imgSrc="images/g-6.jpg"
        />
        <GalleryContent
            foodName="tasty food"
            imgSrc="images/g-7.jpg"
        />
        <GalleryContent
            foodName="tasty food"
            imgSrc="images/g-8.jpg"
        />
      </div>
    </section>
  );
};

export default Gallery;
