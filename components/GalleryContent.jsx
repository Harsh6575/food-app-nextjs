/* eslint-disable @next/next/no-img-element */
import React from "react";

const GalleryContent = ({foodName,imgSrc}) => {
  return (
    <div className="box">
      <img src={imgSrc} alt="" />
      <div className="content">
        <h3>{foodName}</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
          ipsum.
        </p>
        <a href="#" className="btn">
          ordern now
        </a>
      </div>
    </div>
  );
};

export default GalleryContent;
